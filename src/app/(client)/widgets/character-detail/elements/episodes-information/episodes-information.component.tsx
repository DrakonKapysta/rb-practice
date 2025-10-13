'use client'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { ICharacter } from '@/app/(client)/entities/models'

interface IProps {
  character: ICharacter
}

const EpisodesInformationComponent: FC<Readonly<IProps>> = (props) => {
  const { character } = props
  const tCharacter = useTranslations('character')

  return (
    <Card>
      <CardHeader>
        <h3 className='text-xl font-semibold'>{tCharacter('detail.episodes')}</h3>
      </CardHeader>
      <CardBody>
        <p className='text-default-500'>{tCharacter('detail.episode_count', { count: character.episode.length })}</p>
      </CardBody>
    </Card>
  )
}

export default EpisodesInformationComponent
