'use client'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { ICharacter } from '@/app/(client)/entities/models'

interface IProps {
  character: ICharacter
}

const LocationInformationComponent: FC<Readonly<IProps>> = (props) => {
  const { character } = props
  const tCharacter = useTranslations('character')

  return (
    <Card className='text-secondary-500'>
      <CardHeader>
        <h3 className='text-xl font-semibold'>{tCharacter('detail.location_information')}</h3>
      </CardHeader>

      <CardBody className='space-y-3'>
        <div>
          <span className='text-default-500 block'>{tCharacter('detail.origin')}:</span>
          <span className='font-medium'>{character.origin.name}</span>
        </div>

        <div>
          <span className='text-default-500 block'>{tCharacter('detail.location')}:</span>
          <span className='font-medium'>{character.location.name}</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default LocationInformationComponent
