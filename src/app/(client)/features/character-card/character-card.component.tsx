'use client'
import { Card, CardBody, CardHeader } from '@heroui/card'
import Image from 'next/image'
import Link from 'next/link'
import { getStatusColor } from '@/app/(client)/shared/lib'
import { ICharacterCardProps } from './character-card.interface'
import { useEffect, useState } from 'react'
import { useVisitedCharacters } from '@/app/(client)/shared'

export const CharacterCard = ({ character, isPriority }: ICharacterCardProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const addVisitedCharacter = useVisitedCharacters((state) => state.addVisitedCharacter)
  const isVisited = useVisitedCharacters((state) => state.isVisited)

  const hasVisited = isMounted && isVisited(character.id)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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
          {hasVisited && <span className='rounded-full bg-green-100 px-2 py-1 text-xs text-green-800'>Visited</span>}
        </div>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>Status:</span>
            <span className={`text-small font-medium ${getStatusColor(character.status)}`}>{character.status}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>Species:</span>
            <span className='text-small font-medium'>{character.species}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>Gender:</span>
            <span className='text-small font-medium'>{character.gender}</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-small text-default-500'>Origin:</span>
            <span className='text-small line-clamp-1 font-medium'>{character.origin.name}</span>
          </div>
        </div>
        <div className='mt-4'>
          <Link
            href={`/character/${character.id}`}
            className='text-primary text-small font-medium hover:underline'
            onNavigate={() => {
              addVisitedCharacter(character)
            }}
          >
            View Details →
          </Link>
        </div>
      </CardBody>
    </Card>
  )
}
