'use client'

import { FC } from 'react'

import { Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import { rickAndMortyByIdQueryOptions } from '@/app/(client)/entities/api'
import { OopsMessageComponent } from '@/app/(client)/shared/ui'
import { Link } from '@/pkg/libraries/locale'

import {
  BasicInformationComponent,
  CharacterHeaderComponent,
  CharacterImageComponent,
  EpisodesInformationComponent,
  LocationInformationComponent,
} from './elements'

interface IProps {
  characterId: number
}

const CharacterDetailComponent: FC<Readonly<IProps>> = (props) => {
  const { characterId } = props

  const { data: character, isLoading, error } = useQuery(rickAndMortyByIdQueryOptions(characterId))

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <OopsMessageComponent
        message='Failed to load character details. Please try again.'
        back={
          <Link href='/' className='text-default-500'>
            Back to Characters
          </Link>
        }
      />
    )
  }

  if (!character) {
    return <OopsMessageComponent message='Character not found.' className='text-default-500' />
  }

  return (
    <div className='mx-auto max-w-4xl space-y-6'>
      <CharacterHeaderComponent character={character} />

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <CharacterImageComponent character={character} />

        <div className='space-y-4'>
          <BasicInformationComponent character={character} />
          <LocationInformationComponent character={character} />
          <EpisodesInformationComponent character={character} />
        </div>
      </div>
    </div>
  )
}

export default CharacterDetailComponent
