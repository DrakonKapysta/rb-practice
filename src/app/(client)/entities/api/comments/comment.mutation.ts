import { ECommentQueryKey, ICreateComment } from '@/app/(client)/entities/models'
import { mutationOptions } from '@tanstack/react-query'
import { captureException } from '@sentry/nextjs'
import { getQueryClient } from '@/pkg/libraries/rest-api'
import { createComment } from './comment.api'
import { addToast } from '@heroui/react'

const queryClient = getQueryClient()

export const CreateCommentMutationOptions = () => {
  return mutationOptions({
    mutationFn: (comment: ICreateComment) => createComment(comment),
    onSuccess: (comment) => {
      console.log(comment)
      if (comment.success) {
        queryClient.invalidateQueries({
          queryKey: [ECommentQueryKey.COMMENTS_CHARACTER_ID, comment.result?.characterId],
        })
        addToast({
          title: 'Success',
          description: 'Comment created successfully',
          color: 'success',
        })
      } else {
        addToast({
          title: 'Error',
          description: comment.error,
          color: 'danger',
        })
      }
    },
    onError: (error) => {
      captureException(error, {
        tags: { function: 'CreateCommentMutationOptions', type: 'client_error' },
      })
      addToast({
        title: 'Error',
        description: 'Failed to create comment',
        color: 'danger',
      })
    },
  })
}
