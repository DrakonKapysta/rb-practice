import { queryOptions } from '@tanstack/react-query'

import { ECommentQueryKey } from '@/app/(client)/entities/models'

import { getCommentById, getCommentsByCharacterId } from './comment.api'

export const CommentByIdQueryOptions = (commentId: number) => {
  return queryOptions({
    queryKey: [ECommentQueryKey.COMMENTS, commentId],

    queryFn: () => getCommentById(commentId),
  })
}

export const CommentsByCharacterIdQueryOptions = (characterId: number) => {
  return queryOptions({
    queryKey: [ECommentQueryKey.COMMENTS_CHARACTER_ID, characterId],

    queryFn: () => getCommentsByCharacterId(characterId),
  })
}
