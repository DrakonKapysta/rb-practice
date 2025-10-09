import { FC } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { ICharacter } from '@/app/(client)/entities/models'

interface IProps {
  character: ICharacter
}

const LocationInformationComponent: FC<Readonly<IProps>> = (props) => {
  const { character } = props

  return (
    <Card>
      <CardHeader>
        <h3 className='text-xl font-semibold'>Location Information</h3>
      </CardHeader>
      <CardBody className='space-y-3'>
        <div>
          <span className='text-default-500 block'>Origin:</span>
          <span className='font-medium'>{character.origin.name}</span>
        </div>
        <div>
          <span className='text-default-500 block'>Current Location:</span>
          <span className='font-medium'>{character.location.name}</span>
        </div>
      </CardBody>
    </Card>
  )
}

export default LocationInformationComponent
