export enum ECommentQueryKey {
  COMMENTS = 'comments',
  COMMENTS_CHARACTER_ID = 'comments-character-id',
}

export interface IComment {
  id: number
  content: string
  characterId: number
  userId: string
}

export interface ICommentMutationResult {
  success: boolean
  error?: string
  result?: IComment
}

export interface ICreateComment {
  content: string
  characterId: number
}

export interface ICommentsFilters {
  characterId?: number
  commentId?: string
  limit?: number
  offset?: number
  orderDirection?: 'asc' | 'desc'
  search?: string
}
