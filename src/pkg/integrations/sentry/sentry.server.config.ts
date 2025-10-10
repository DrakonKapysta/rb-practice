import * as Sentry from '@sentry/nextjs'

import { envServer } from '@/config/env'

import { sentryUtils } from './sentry.utils'

Sentry.init({
  dsn: envServer.SENTRY_DSN,

  tracesSampler: (samplingContext) => {
    if (envServer.NODE_ENV === 'development') {
      return 0.1
    }

    if (samplingContext.name.includes('auth')) {
      return 1
    }

    return samplingContext.inheritOrSampleWith(0.5)
  },

  beforeSend(event, hint) {
    if (event.exception) {
      const error = hint.originalException
      if (sentryUtils.shouldExcludeError(error)) {
        return null
      }
    }

    return event
  },

  environment: envServer.NODE_ENV,

  sampleRate: 0.5,
  maxBreadcrumbs: 50,
  normalizeDepth: 5,
  maxValueLength: 250,

  sendDefaultPii: true,
})
