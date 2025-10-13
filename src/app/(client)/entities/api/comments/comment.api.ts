'use server'

import { eq } from 'drizzle-orm'
import { unstable_cache } from 'next/cache'

import { captureException } from '@sentry/nextjs'

import { comments, db } from '@/pkg/libraries/db'

export class CommentApi {
  static async getComments(characterId: number) {
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
      [`comments-by-character-${characterId}`],
      { revalidate: 60, tags: [`comments-character-${characterId}`] },
    )
  }
}
