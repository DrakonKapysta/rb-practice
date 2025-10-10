'use client'

import { ArrowLeft, RotateCcw } from 'lucide-react'
import { FC } from 'react'

import { Button, Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'

import { rickAndMortyByIdQueryOptions } from '@/app/(client)/entities/api'
import { OopsMessageComponent } from '@/app/(client)/shared/ui'
import { Link, useRouter } from '@/pkg/libraries/locale'

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

  const router = useRouter()

  const { data: character, isLoading, error } = useQuery(rickAndMortyByIdQueryOptions(characterId))

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <OopsMessageComponent
        className='space-y-4'
        message='Something went wrong. Failed to load character details.'
        actions={
          <Button variant='light' onPress={() => router.refresh()}>
            <RotateCcw /> Try Again
          </Button>
        }
      />
    )
  }

  if (!character || character.error) {
    return (
      <OopsMessageComponent
        message='Character not found.'
        className='text-default-500 space-y-4'
        actions={
          <Link
            href='/'
            className='text-default-500 border-default-500 hover:bg-default-500/10 inline-flex rounded-md border px-2 py-2 font-medium hover:underline'
          >
            <ArrowLeft />
            Back to Characters
          </Link>
        }
      />
    )
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
