import { FC } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { ICharacter } from '@/app/(client)/entities/models'
import { getCharacterStatusColorUtil } from '@/pkg/utils/character'

interface IProps {
  character: ICharacter
}

const BasicInformationComponent: FC<Readonly<IProps>> = (props) => {
  const { character } = props

  return (
    <Card>
      <CardHeader>
        <h3 className='text-xl font-semibold'>Basic Information</h3>
      </CardHeader>
      <CardBody className='space-y-3'>
        <div className='flex justify-between'>
          <span className='text-default-500'>Status:</span>
          <span className={`font-medium ${getCharacterStatusColorUtil(character.status)}`}>{character.status}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-default-500'>Species:</span>
          <span className='font-medium'>{character.species}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-default-500'>Type:</span>
          <span className='font-medium'>{character.type || 'Unknown'}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-default-500'>Gender:</span>
          <span className='font-medium'>{character.gender}</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default BasicInformationComponent
