import { Card, CardHeader } from '@heroui/react'
import Image from 'next/image'
import { ICharacter } from '@/entities'

interface ICharacterImageProps {
  character: ICharacter
}

export const CharacterImage = ({ character }: ICharacterImageProps) => {
  return (
    <Card>
      <CardHeader className='flex-col items-start px-4 pt-2 pb-0'>
        <div className='relative h-96 w-full'>
          <Image
            src={character.image}
            alt={character.name}
            fill
            className='rounded-lg object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </div>
      </CardHeader>
    </Card>
  )
}
