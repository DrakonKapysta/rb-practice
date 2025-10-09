'use client'

import { useRickAndMortyCharacterQuery } from '@/entities/api/rick-and-morty'
import { ICharacterDetailProps } from './character-detail.interface'
import Link from 'next/link'
import { Button, Spinner } from '@/app/(client)/shared'
import { FailedLoad } from '@/app/(client)/features/failed-load'
import { CharacterHeader, CharacterImage, BasicInformation, LocationInformation, EpisodesInformation } from './elements'

export const CharacterDetail = ({ characterId }: ICharacterDetailProps) => {
  const { data: character, isLoading, error } = useRickAndMortyCharacterQuery(characterId)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <FailedLoad
        message='Failed to load character details. Please try again.'
        back={
          <Button as={Link} href='/' color='default' variant='flat'>
            Back to Characters
          </Button>
        }
      />
    )
  }

  if (!character) {
    return <FailedLoad message='Character not found.' className='text-default-500' />
  }

  return (
    <div className='mx-auto max-w-4xl space-y-6'>
      <CharacterHeader character={character} />

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <CharacterImage character={character} />

        <div className='space-y-4'>
          <BasicInformation character={character} />
          <LocationInformation character={character} />
          <EpisodesInformation character={character} />
        </div>
      </div>
    </div>
  )
}
