import { relations } from 'drizzle-orm'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

import { comments } from './comments'

export const characters = pgTable('characters', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  status: text({ enum: ['Alive', 'Dead', 'unknown'] }).notNull(),
  species: text('species').notNull(),
  type: text('type').notNull(),
  gender: text({ enum: ['Female', 'Male', 'Genderless', 'unknown'] }).notNull(),
  origin: text('origin').notNull(),
  location: text('location').notNull(),
  image: text('image').notNull(),
  episode: text('episode').notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
})

export const charactersRelations = relations(characters, ({ many }) => ({
  comments: many(comments),
}))
