import { Button } from '@/app/(client)/shared'
import Link from 'next/link'
import { ICharacter } from '@/entities'

interface ICharacterHeaderProps {
  character: ICharacter
}

export const CharacterHeader = ({ character }: ICharacterHeaderProps) => {
  return (
    <div className='mb-6 flex items-center gap-4'>
      <Button as={Link} href='/' color='default' variant='flat'>
        ← Back to Characters
      </Button>
      <h1 className='text-3xl font-bold'>{character.name}</h1>
    </div>
  )
}
