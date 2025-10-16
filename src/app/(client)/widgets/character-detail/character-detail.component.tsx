'use client'

import { ArrowLeft, RotateCcw } from 'lucide-react'
import { useTranslations } from 'next-intl'
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
import { CharacterCommentFormComponent } from '@/app/(client)/features/character-comment-form'
import { CharacterCommentComponent } from '@/app/(client)/features/character-comment'

interface IProps {
  characterId: number
}

const CharacterDetailComponent: FC<Readonly<IProps>> = (props) => {
  const { characterId } = props

  const router = useRouter()
  const tErrors = useTranslations('errors')
  const tCharacter = useTranslations('character.detail')

  const { data: character, isLoading, error } = useQuery(rickAndMortyByIdQueryOptions(characterId))

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return (
      <OopsMessageComponent
        className='space-y-4'
        message={tErrors('generic.title')}
        actions={
          <Button variant='light' onPress={() => router.refresh()}>
            <RotateCcw /> {tErrors('generic.retry')}
          </Button>
        }
      />
    )
  }

  if (!character || character.error) {
    return (
      <OopsMessageComponent
        message={tErrors('not_found.characters_not_found')}
        className='text-default-500 space-y-4'
        actions={
          <Link
            href='/'
            className='text-default-500 border-default-500 hover:bg-default-500/10 inline-flex rounded-md border px-2 py-2 font-medium hover:underline'
          >
            <ArrowLeft />
            {tErrors('not_found.button')}
          </Link>
        }
      />
    )
  }

  return (
    <div className='mx-auto mt-8 max-w-4xl space-y-6'>
      <CharacterHeaderComponent character={character} backToMessage={tCharacter('back_to_characters')} />

      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        <CharacterImageComponent character={character} />

        <div className='space-y-4'>
          <BasicInformationComponent character={character} />
          <LocationInformationComponent character={character} />
          <EpisodesInformationComponent character={character} />
        </div>
      </div>

      <CharacterCommentFormComponent characterId={characterId} />
      <CharacterCommentComponent characterId={characterId} />
    </div>
  )
}

export default CharacterDetailComponent
