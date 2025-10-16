import { queryOptions } from '@tanstack/react-query'
import { getCommentById, getCommentsByCharacterId } from './comment.api'
import { ECommentQueryKey } from '@/app/(client)/entities/models'

export const CommentByIdQueryOptions = (commentId: number) => {
  return queryOptions({
    queryKey: [ECommentQueryKey.COMMENTS, commentId],
    queryFn: () => getCommentById(commentId),
  })
}

export const CommentByCharacterIdQueryOptions = (characterId: number) => {
  return queryOptions({
    queryKey: [ECommentQueryKey.COMMENTS_CHARACTER_ID, characterId],
    queryFn: () => getCommentsByCharacterId(characterId),
  })
}
