'use client'

import { Button, Spinner } from '@/app/(client)/shared/ui'
import { useRickAndMortyCharactersQuery } from '@/entities/api/rick-and-morty'
import { FailedLoad } from '@/app/(client)/features/failed-load'
import { CharacterCard } from '@/app/(client)/features'
import { useSearchParams } from 'next/navigation'
import { ICharacterFilters } from '@/entities'

export const CharacterList = () => {
  const searchParams = useSearchParams()

  const filters = Object.fromEntries(searchParams.entries()) as ICharacterFilters

  const { data, isLoading, isFetching } = useRickAndMortyCharactersQuery(filters)

  if (isLoading || (isFetching && !data)) {
    return <Spinner />
  }

  if (!data?.results || data.results.length === 0) {
    return <FailedLoad message='No characters found.' className='text-default-500' />
  }

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.results.map((character, index) => (
          <CharacterCard key={character.id} character={character} isPriority={index < 4} />
        ))}
      </div>

      {data.info.next && (
        <div className='flex justify-center'>
          <Button color='primary' variant='flat'>
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}
