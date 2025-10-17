import { Identify } from 'flags'
import { dedupe, flag } from 'flags/next'
import { after } from 'next/server'

import { Attributes, createGrowthbookAdapter, TrackingCallback } from '@flags-sdk/growthbook'

import { envServer } from '@/config/env'
import { createServerClient } from '@/pkg/integrations/supabase'
import { loggerUtil } from '@/pkg/utils/logger'

import { experimantBatchQueue } from './experimant-batch-queue'

export class GrowthBookAdapter {
  private static instance: GrowthBookAdapter
  private isInitialized: boolean = false
  private adapter!: ReturnType<typeof createGrowthbookAdapter>

  public constructor() {
    this.initialize()
  }

  public static getInstance(): GrowthBookAdapter {
    if (!GrowthBookAdapter.instance) {
      loggerUtil({ text: 'GrowthBookAdapter', value: 'initializing ...' })

      const instance = new GrowthBookAdapter()

      GrowthBookAdapter.instance = instance
    }

    return GrowthBookAdapter.instance
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) return

    this.adapter = createGrowthbookAdapter({
      apiHost: envServer.GROWTHBOOK_API_HOST,
      clientKey: envServer.GROWTHBOOK_CLIENT_KEY || '',
      appOrigin: envServer.GROWTHBOOK_APP_ORIGIN,

      initOptions: {
        cacheSettings: {
          staleTTL: 1000 * 30,
          maxAge: 1000 * 60 * 2,
          disableCache: false,
          backgroundSync: false,
          maxEntries: 100,
          disableIdleStreams: true,
          idleStreamInterval: 100000,
          cacheKey: 'gbFeaturesCache',
        },
      },
      trackingCallback: (experiment, result) => {
        after(() => {
          experimantBatchQueue.addEvent(experiment, result, result.hashValue)
        })
      },
    })

    await this.adapter.initialize()

    this.isInitialized = true
  }

  public getAdapter(): ReturnType<typeof createGrowthbookAdapter> | null {
    if (!this.adapter) {
      return null
    }

    return this.adapter
  }

  public setTrackingCallback(callback: TrackingCallback): void {
    this.adapter.setTrackingCallback(callback)
  }

  public getFeature<T>(feature: string, defaultValue: T, attributes?: Attributes) {
    const identify = dedupe((async () => {
      const supabase = await createServerClient()

      const { data, error } = await supabase.auth.getUser()

      if (error) {
        return null
      }
      return {
        ...attributes,
        id: data.user?.id,
      }
    }) satisfies Identify<Attributes>)

    return flag<T>({
      key: feature,
      defaultValue,
      identify,
      adapter: this.adapter.feature<T>(),
    })
  }
}

export const growthbookAdapter = GrowthBookAdapter.getInstance()
