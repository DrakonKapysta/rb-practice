'use server'

import { eq } from 'drizzle-orm'
import { revalidateTag, unstable_cache } from 'next/cache'

import { captureException } from '@sentry/nextjs'

import { ICommentMutationResult, ICommentsFilters, ICreateComment } from '@/app/(client)/entities/models'
import { createServerClient } from '@/pkg/integrations/supabase'
import { comments, db, withPagination } from '@/pkg/libraries/db'

export async function getCommentById(commentId: number) {
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
  )()
}

export async function getCommentsByCharacterId(characterId: number) {
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
  )()
}

export async function createComment(comment: ICreateComment): Promise<ICommentMutationResult> {
  try {
    const supabase = await createServerClient()
    const user = await supabase.auth.getUser()

    if (!user.data.user?.id) {
      return { success: false, error: 'User not authenticated' }
    }

    const commentData = {
      ...comment,
      userId: user.data.user.id,
    }
    const result = await db.insert(comments).values(commentData).returning()

    revalidateTag(`comments-character-id-${comment.characterId}`)

    return { success: true, result: result[0] }
  } catch (error) {
    captureException(error, {
      tags: { characterId: comment.characterId, function: 'CommentApi.createComment', type: 'database_error' },
    })

    return { success: false, error: 'Failed to create comment' }
  }
}

export async function getComments(filters?: ICommentsFilters) {
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
  )()
}
