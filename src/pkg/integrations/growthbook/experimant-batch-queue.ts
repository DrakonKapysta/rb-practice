import { restApiFetcher } from '@/pkg/libraries/rest-api'

import { loggerUtil } from '@/pkg/utils/logger'

import { Experiment, Result } from '@growthbook/growthbook'

interface ExperimentEvent {
  experiment: Experiment<unknown>
  result: Result<unknown>
  timestamp: Date
}

class ExperimantBatchQueue {
  private static instance: ExperimantBatchQueue
  private queue: ExperimentEvent[] = []
  private flushTimeout: NodeJS.Timeout | null = null

  private trackedExperiments: Map<string, { variation: string; timestamp: number }> = new Map()
  private readonly DEDUP_WINDOW = 5000

  private readonly FLUSH_BATCH_SIZE = 50
  private readonly FLUSH_DELAY = 1000

  private constructor() {}

  public static getInstance(): ExperimantBatchQueue {
    if (!ExperimantBatchQueue.instance) {
      ExperimantBatchQueue.instance = new ExperimantBatchQueue()
    }
    return ExperimantBatchQueue.instance
  }

  public addEvent(experiment: Experiment<unknown>, result: Result<unknown>, distinct_id?: string): void {
    const variation = result.key || String(result.variationId)
    const dedupKey = `${experiment.key}:${variation}`

    const now = Date.now()
    const existing = this.trackedExperiments.get(dedupKey)

    if (existing && now - existing.timestamp < this.DEDUP_WINDOW) {
      return
    }

    this.trackedExperiments.set(dedupKey, { variation, timestamp: now })

    for (const [key, value] of this.trackedExperiments.entries()) {
      if (now - value.timestamp > this.DEDUP_WINDOW) {
        this.trackedExperiments.delete(key)
      }
    }

    this.queue.push({
      experiment,
      result,
      timestamp: new Date(),
    })
    if (this.flushTimeout) {
      clearTimeout(this.flushTimeout)
    }

    if (this.queue.length >= this.FLUSH_BATCH_SIZE) {
      this.flush(distinct_id)
    } else {
      this.flushTimeout = setTimeout(() => {
        this.flush(distinct_id)
      }, this.FLUSH_DELAY)
    }
  }

  private flush(distinct_id?: string): void {
    if (this.queue.length === 0) return

    const eventsToSend = [...this.queue]
    this.queue = []

    if (this.flushTimeout) {
      clearTimeout(this.flushTimeout)
      this.flushTimeout = null
    }

    this.sendEvents(eventsToSend, distinct_id)
  }

  private async sendEvents(eventsToSend: ExperimentEvent[], distinct_id?: string): Promise<void> {
    try {
      const events = eventsToSend.map(({ experiment, result }) => ({
        event: 'experiment_viewed' as const,
        properties: {
          experiment: experiment.key,
          variation: result.key || String(result.variationId),
          distinct_id,
        },
      }))

      await restApiFetcher.post('mixpanel', { json: { events } }).json()

      loggerUtil({
        text: 'ExperimentBatchQueue',
        value: `Sent ${events.length} experiments to Mixpanel`,
        level: 'info',
      })
    } catch (error) {
      loggerUtil({
        text: 'ExperimentBatchQueue flush error',
        value: error,
        level: 'error',
        isActiveOnProd: true,
      })
    }
  }

  public forceFlush(): void {
    this.flush()
  }

  public getQueueLength(): number {
    return this.queue.length
  }

  public getQueue(): ExperimentEvent[] {
    return this.queue
  }
}

export const experimantBatchQueue = ExperimantBatchQueue.getInstance()
