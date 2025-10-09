import { queryOptions } from '@tanstack/react-query'

import {
  ERickAndMortyQueryKey,
  ICharacter,
  ICharacterFilters,
  ICharactersResponse,
} from '@/app/(client)/entities/models'

import { RickAndMortyQueryApi } from './rick-and-morty.api'

export const rickAndMortyQueryOptions = (filters?: ICharacterFilters) => {
  return queryOptions<ICharactersResponse>({
    queryKey: [ERickAndMortyQueryKey.RICK_AND_MORTY, filters],
    queryFn: (params) => RickAndMortyQueryApi.getCharacters(filters, params),
  })
}

export const rickAndMortyByIdQueryOptions = (id: number) => {
  return queryOptions<ICharacter>({
    queryKey: [ERickAndMortyQueryKey.RICK_AND_MORTY, id],
    queryFn: () => RickAndMortyQueryApi.getCharacterById(id),
  })
}
