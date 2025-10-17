import { captureException } from '@sentry/nextjs'
import { mutationOptions } from '@tanstack/react-query'

import { ECommentQueryKey, ICreateComment, IUpdateCommnent } from '@/app/(client)/entities/models'
import { getQueryClient } from '@/pkg/libraries/rest-api'

import { createComment, deleteComment, updateComment } from './comment.api'

const queryClient = getQueryClient()

export const createCommentMutationOptions = () => {
  return mutationOptions({
    mutationFn: (comment: ICreateComment) => createComment(comment),

    onSuccess: async (comment) => {
      if (comment.success) {
        await queryClient.invalidateQueries({
          queryKey: [ECommentQueryKey.COMMENTS_CHARACTER_ID, comment.result?.characterId],
        })
      }
    },

    onError: (error) => {
      captureException(error, {
        tags: { function: 'CreateCommentMutationOptions', type: 'client_error' },
      })
    },
  })
}

export const deleteCommentMutatationOptions = () => {
  return mutationOptions({
    mutationFn: (commentId: number) => deleteComment(commentId),

    onSuccess: async (commentId) => {
      if (commentId) {
        await queryClient.invalidateQueries({
          queryKey: [ECommentQueryKey.COMMENTS_CHARACTER_ID, commentId],
        })
      }
    },

    onError: (error) => {
      captureException(error, {
        tags: { function: 'DeleteCommentMutationOptions', type: 'client_error' },
      })
    },
  })
}

export const updateCommentMutationOptions = () => {
  return mutationOptions({
    mutationFn: ({ commentId, comment }: { commentId: number; comment: IUpdateCommnent }) =>
      updateComment(commentId, comment),

    onSuccess: async (comment) => {
      if (comment) {
        await queryClient.invalidateQueries({
          queryKey: [ECommentQueryKey.COMMENTS_CHARACTER_ID, comment.characterId],
        })
      }
    },

    onError: (error) => {
      captureException(error, {
        tags: { function: 'UpdateCommentMutationOptions', type: 'client_error' },
      })
    },
  })
}
