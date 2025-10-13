export interface IComment {
  id: number
  content: string
  characterId: number
  userId: string
}

export interface ICommentsResponse {
  comments: IComment[]
}

export interface ICommentsFilters {
  characterId?: number
  commentId?: string
  limit?: number
  offset?: number
  orderBy?: string
  orderDirection?: string
  search?: string
}
