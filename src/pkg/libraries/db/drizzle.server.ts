import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { comments } from './schema'

const client = postgres(process.env.DATABASE_URL!, { prepare: false })
const db = drizzle({ client, schema: { ...comments } })

export default db
