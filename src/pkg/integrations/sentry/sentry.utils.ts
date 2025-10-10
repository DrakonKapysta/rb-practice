import excludedErrors from './excluded-error-messages.json' assert { type: 'json' }

export const sentryUtils = {
  excludeErrors: excludedErrors,

  shouldExcludeError(error: unknown) {
    if (!(error instanceof Error)) return false

    return this.excludeErrors.includes(error.message)
  },
}
