import * as qs from 'qs-esm'

import { captureException } from '@sentry/nextjs'
import { QueryFunctionContext } from '@tanstack/react-query'

import { ICharacter, ICharacterFilters, ICharactersResponse } from '@/app/(client)/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api'
import { envClient } from '@/config/env'

export async function getCharacters(
  filters?: ICharacterFilters,
  options?: QueryFunctionContext,
): Promise<ICharactersResponse> {
  const queryString = filters ? qs.stringify(filters) : ''
  const url = queryString ? `character?${queryString}` : 'character'

  try {
    const data = await restApiFetcher
      .get(url, { prefixUrl: envClient.NEXT_PUBLIC_EXTERNAL_API_URL, signal: options?.signal })
      .json<ICharactersResponse>()

    return data
  } catch (error) {
    captureException(error, {
      tags: { query: queryString, function: 'RickAndMortyQueryApi.getCharacters', type: 'network_error' },
    })

    throw error
  }
}
export async function getCharacterById(id: number, options?: QueryFunctionContext): Promise<ICharacter> {
  try {
    const data = await restApiFetcher
      .get(`character/${id}`, { prefixUrl: envClient.NEXT_PUBLIC_EXTERNAL_API_URL, signal: options?.signal })
      .json<ICharacter>()

    return data
  } catch (error) {
    captureException(error, {
      tags: { characterId: id, function: 'RickAndMortyQueryApi.getCharacterById', type: 'network_error' },
    })
    throw error
  }
}
