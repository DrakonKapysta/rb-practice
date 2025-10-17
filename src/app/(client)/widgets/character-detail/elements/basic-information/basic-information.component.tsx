'use client'

import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { ICharacter } from '@/app/(client)/entities/models'
import { getCharacterStatusColorUtil } from '@/pkg/utils/character'

interface IProps {
  character: ICharacter
}

const BasicInformationComponent: FC<Readonly<IProps>> = (props) => {
  const { character } = props
  const tCharacter = useTranslations('character')

  return (
    <Card className='text-secondary-500'>
      <CardHeader>
        <h3 className='text-xl font-semibold'>{tCharacter('detail.basic_information')}</h3>
      </CardHeader>
      <CardBody className='space-y-3'>
        <div className='flex justify-between'>
          <span className='text-default-500'>{tCharacter('detail.status')}:</span>
          <span className={`font-medium ${getCharacterStatusColorUtil(character.status)}`}>{character.status}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-default-500'>{tCharacter('detail.species')}:</span>
          <span className='font-medium'>{character.species}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-default-500'>{tCharacter('detail.type')}:</span>
          <span className='font-medium'>{character.type || 'Unknown'}</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-default-500'>{tCharacter('detail.gender')}:</span>
          <span className='font-medium'>{character.gender}</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default BasicInformationComponent
