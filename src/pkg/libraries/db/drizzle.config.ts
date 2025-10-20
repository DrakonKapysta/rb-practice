import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './src/pkg/libraries/db/migrations',
  schema: './src/pkg/libraries/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  entities: {
    roles: {
      provider: 'supabase',
    },
  },
})
