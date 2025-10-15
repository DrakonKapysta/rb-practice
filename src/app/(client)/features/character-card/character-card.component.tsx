'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FC, useEffect, useState } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/card'

import { ICharacter } from '@/app/(client)/entities/models'
import { useGlobalStore } from '@/app/(client)/shared/store'
import { Link } from '@/pkg/libraries/locale'
import { getCharacterStatusColorUtil } from '@/pkg/utils/character'

interface IProps {
  character: ICharacter
  isPriority?: boolean
}

const CharacterCardComponent: FC<Readonly<IProps>> = (props) => {
  const { character, isPriority } = props

  const tCharacter = useTranslations('character.detail')
  const tUI = useTranslations('ui')

  const [isMounted, setIsMounted] = useState(false)

  const addVisitedCharacter = useGlobalStore((state) => state.addVisitedCharacter)
  const isVisited = useGlobalStore((state) => state.isVisited)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const hasVisited = isMounted && isVisited(character.id)

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='flex-col items-start px-4 pt-2 pb-0'>
        <div className='relative mb-2 h-48 w-full'>
          <Image
            src={character.image}
            alt={character.name}
            fill
            className='rounded-lg object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            priority={isPriority}
            loading={isPriority ? undefined : 'lazy'}
            unoptimized={false}
          />
        </div>
        <div className='flex items-center gap-2'>
          <h4 className='text-large line-clamp-2 font-bold'>{character.name}</h4>
          {hasVisited && (
            <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-800'>{tUI('visited')}</span>
          )}
        </div>
      </CardHeader>

      <CardBody className='overflow-visible py-2'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>{tCharacter('status')}:</span>
            <span className={`text-small font-medium ${getCharacterStatusColorUtil(character.status)}`}>
              {character.status}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>{tCharacter('species')}:</span>
            <span className='text-small font-medium'>{character.species}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>{tCharacter('gender')}:</span>
            <span className='text-small font-medium'>{character.gender}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>{tCharacter('origin')}:</span>
            <span className='text-small line-clamp-1 font-medium'>{character.origin.name}</span>
          </div>
        </div>
        <div className='my-4'>
          <Link
            href={`/character/${character.id}`}
            className='text-primary text-small border-primary hover:bg-primary/10 rounded-md border px-2 py-2 font-medium hover:underline'
            onNavigate={() => {
              addVisitedCharacter(character)
            }}
          >
            {tUI('view_details')}
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}

export default CharacterCardComponent
