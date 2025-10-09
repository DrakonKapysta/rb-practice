import { notFound } from 'next/navigation'
import * as qs from 'qs-esm'

import { QueryFunctionContext } from '@tanstack/react-query'

import { ICharacter, ICharacterFilters, ICharactersResponse } from '@/app/(client)/entities/models'
import { restApiFetcher } from '@/pkg/libraries/rest-api'

export class RickAndMortyQueryApi {
  static async getCharacters(
    filters?: ICharacterFilters,
    options?: QueryFunctionContext,
  ): Promise<ICharactersResponse> {
    const queryString = filters ? qs.stringify(filters) : ''
    const url = queryString ? `character?${queryString}` : 'character'

    try {
      const data = await restApiFetcher.get(url, { signal: options?.signal }).json<ICharactersResponse>()

      return data
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return { results: [], info: { count: 0, pages: 0, next: null, prev: null } }
      }
      throw error
    }
  }

  static async getCharacterById(id: number, options?: QueryFunctionContext): Promise<ICharacter> {
    const data = await restApiFetcher.get(`character/${id}`, { signal: options?.signal }).json<ICharacter>()

    if (!data) {
      return notFound()
    }

    return data
  }
}
