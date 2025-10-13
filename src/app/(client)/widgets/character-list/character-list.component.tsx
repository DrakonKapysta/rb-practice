'use client'

import { useTranslations } from 'next-intl'
import * as qs from 'qs-esm'
import { FC } from 'react'

import { Button, Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import { rickAndMortyQueryOptions } from '@/app/(client)/entities/api'
import { CharacterCardComponent } from '@/app/(client)/features/character-card'
import { useQueryParams } from '@/app/(client)/shared/hooks'
import { OopsMessageComponent } from '@/app/(client)/shared/ui'

interface IProps {}

const CharacterListComponent: FC<Readonly<IProps>> = () => {
  const { searchParams } = useQueryParams()
  const t = useTranslations('character.list')

  const filters = qs.parse(searchParams.toString())

  const { data, isLoading, isFetching } = useQuery(rickAndMortyQueryOptions(filters))

  if (isLoading || (isFetching && !data)) {
    return <Spinner />
  }

  if (!data?.results || data.results.length === 0) {
    return <OopsMessageComponent message='No characters found.' className='text-default-500' />
  }

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.results.map((character, index) => (
          <CharacterCardComponent key={character.id} character={character} isPriority={index < 4} />
        ))}
      </div>

      {data.info.next && (
        <div className='flex justify-center'>
          <Button color='primary' variant='flat'>
            {t('load_more')}
          </Button>
        </div>
      )}
    </div>
  )
}

export default CharacterListComponent
