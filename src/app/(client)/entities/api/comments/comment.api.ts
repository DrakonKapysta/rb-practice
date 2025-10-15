'use server'

import { eq } from 'drizzle-orm'
import { unstable_cache } from 'next/cache'

import { captureException } from '@sentry/nextjs'

import { ICommentsFilters } from '@/app/(client)/entities/models'
import { comments, db, withPagination } from '@/pkg/libraries/db'

export class CommentApi {
  static async getCommentById(commentId: number) {
    return unstable_cache(
      async () => {
        try {
          const result = await db.select().from(comments).where(eq(comments.id, commentId))
          return result
        } catch (error) {
          captureException(error, {
            tags: { characterId: commentId, function: 'CommentApi.getCommentById', type: 'database_error' },
          })
          throw error
        }
      },
      [`comment-by-id-${commentId}`],
      { revalidate: 60, tags: [`comments-id-${commentId}`] },
    )
  }

  static async getCommentsByCharacterId(characterId: number) {
    return unstable_cache(
      async () => {
        try {
          const result = await db.select().from(comments).where(eq(comments.characterId, characterId))
          return result
        } catch (error) {
          captureException(error, {
            tags: { characterId: characterId, function: 'CommentApi.getCommentsByCharacterId', type: 'database_error' },
          })
          throw error
        }
      },
      [`comments-by-character-id-${characterId}`],
      { revalidate: 60, tags: [`comments-character-id-${characterId}`] },
    )
  }

  static async getComments(filters?: ICommentsFilters) {
    return unstable_cache(
      async () => {
        try {
          let query = db.select().from(comments).$dynamic()
          query = withPagination(query, filters?.offset, filters?.limit)
        } catch (error) {
          captureException(error, {
            tags: {
              ...filters,
              function: 'CommentApi.getComments',
              type: 'database_error',
            },
          })
          throw error
        }
      },
      [`comments`, JSON.stringify(filters)],
      { revalidate: 60, tags: [`comments-with-filters`, JSON.stringify(filters)] },
    )
  }
}
