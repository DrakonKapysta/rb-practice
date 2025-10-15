'use client'

import { CheckListIcon, DetailedReportIcon, RocketIcon } from '@/app/(client)/shared/assets/icon'
import { Card, CardBody } from '@heroui/react'
import { FC } from 'react'

interface IProps {
  title: string
  items: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

const HowItWorksComponent: FC<Readonly<IProps>> = (props) => {
  const { title, items } = props

  return (
    <div className='pb-6 md:pb-10'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>{title}</h3>
      <div className='flex flex-col gap-4 pt-6 md:flex-row md:gap-6 md:pt-8'>
        {items.map((item, index) => (
          <Card key={index + item.title} className='text-secondary-800 flex-1 border border-[#D9E7FF]'>
            <CardBody className='place-content-inherit align-items-inherit relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words antialiased md:px-8 md:pt-[42px]'>
              {item.icon}
              <p className='text-start text-lg font-semibold'>{item.title}</p>
              <p className='text-start text-sm'>{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HowItWorksComponent
