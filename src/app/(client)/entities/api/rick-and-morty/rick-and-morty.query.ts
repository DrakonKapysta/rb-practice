import { queryOptions } from '@tanstack/react-query'

import {
  ERickAndMortyQueryKey,
  ICharacter,
  ICharacterFilters,
  ICharactersResponse,
} from '@/app/(client)/entities/models'

import { getCharacterById, getCharacters } from './rick-and-morty.api'

export const rickAndMortyQueryOptions = (filters?: ICharacterFilters) => {
  return queryOptions<ICharactersResponse>({
    queryKey: [ERickAndMortyQueryKey.RICK_AND_MORTY, filters],
    queryFn: (params) => getCharacters(filters, params),
  })
}

export const rickAndMortyByIdQueryOptions = (id: number) => {
  return queryOptions<ICharacter>({
    queryKey: [ERickAndMortyQueryKey.RICK_AND_MORTY, id],
    queryFn: () => getCharacterById(id),
  })
}
