import { Card, CardBody, CardHeader } from '@heroui/react'
import { ICharacter } from '@/entities'

interface ILocationInformationProps {
  character: ICharacter
}

export const LocationInformation = ({ character }: ILocationInformationProps) => {
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
