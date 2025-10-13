import { queryOptions } from '@tanstack/react-query'

import { CommentApi } from './comment.api'

export const CommentByIdQueryOptions = (commentId: number) => {
  return queryOptions({
    queryKey: ['comments', commentId],
    queryFn: () => CommentApi.getCommentById(commentId),
  })
}
