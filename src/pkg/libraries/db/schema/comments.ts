import { relations } from 'drizzle-orm'
import { integer, pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core'

import { characters } from './characters'

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  characterId: integer('character_id')
    .notNull()
    .references(() => characters.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const commentsRelations = relations(comments, ({ one }) => ({
  character: one(characters, {
    fields: [comments.characterId],
    references: [characters.id],
  }),
}))
