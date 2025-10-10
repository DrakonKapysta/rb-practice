export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('@/pkg/integrations/sentry/sentry.server.config')
  }
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('@/pkg/integrations/sentry/sentry.edge.config')
  }
}
