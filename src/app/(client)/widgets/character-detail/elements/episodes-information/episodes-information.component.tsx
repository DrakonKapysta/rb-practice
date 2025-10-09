import { FC } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { ICharacter } from '@/app/(client)/entities/models'

interface IProps {
  character: ICharacter
}

const EpisodesInformationComponent: FC<Readonly<IProps>> = (props) => {
  const { character } = props

  return (
    <Card>
      <CardHeader>
        <h3 className='text-xl font-semibold'>Episodes</h3>
      </CardHeader>
      <CardBody>
        <p className='text-default-500'>This character appears in {character.episode.length} episode(s)</p>
      </CardBody>
    </Card>
  )
}

export default EpisodesInformationComponent
