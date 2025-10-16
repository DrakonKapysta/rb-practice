import { captureException } from '@sentry/nextjs'
import { mutationOptions } from '@tanstack/react-query'

import { ECommentQueryKey, ICreateComment } from '@/app/(client)/entities/models'
import { getQueryClient } from '@/pkg/libraries/rest-api'

import { createComment } from './comment.api'

const queryClient = getQueryClient()

export const CreateCommentMutationOptions = () => {
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
