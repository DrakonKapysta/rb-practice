import mixpanel from 'mixpanel'

import { envServer } from '@/config/env'

import { MixpanelEventName, MixpanelEventProperties } from './mixpanel.types'

export class MixpanelServer {
  private static instance: MixpanelServer
  private mixpanel!: mixpanel.Mixpanel

  private constructor() {
    this.initialize()
  }

  public static getInstance() {
    if (!MixpanelServer.instance) {
      MixpanelServer.instance = new MixpanelServer()
    }
    return MixpanelServer.instance
  }

  public initialize() {
    this.mixpanel = mixpanel.init(envServer.MIXPANEL_TOKEN, {
      debug: true,
      geolocate: false,
      host: envServer.MIXPANEL_HOST,
    })
  }

  public track<T extends MixpanelEventName>(event: T, properties: MixpanelEventProperties<T>, distinctId?: string) {
    const eventProperties: mixpanel.PropertyDict = {
      ...properties,
      distinct_id: distinctId,
      timestamp: new Date().toISOString(),
    }

    this.mixpanel.track(event, eventProperties)
  }

  public trackBulk<T extends MixpanelEventName>(
    events: { event: T; properties: MixpanelEventProperties<T> }[],
    distinctId?: string,
  ) {
    this.mixpanel.track_batch(
      events.map((event) => ({
        event: event.event,
        properties: event.properties,
        distinct_id: distinctId,
        timestamp: new Date().toISOString(),
      })),
    )
    this.mixpanel.track_batch(events, { max_batch_size: 100, max_concurrent_requests: 10 })
  }

  public identify(distinctId: string): void {
    this.mixpanel.people.set(distinctId, {})
  }

  public setUserProperties(distinctId: string, properties: mixpanel.PropertyDict): void {
    this.mixpanel.people.set(distinctId, properties)
  }
}

export const mixpanelServer = MixpanelServer.getInstance()
