import { ICharacterFilters } from '@/entities'

export interface ICharacterListProps {
  filters?: ICharacterFilters
  onLoadMore?: () => void
  hasNextPage?: boolean
  isLoadingMore?: boolean
}
