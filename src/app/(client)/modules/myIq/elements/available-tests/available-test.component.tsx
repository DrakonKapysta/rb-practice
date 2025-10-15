'use client'

import { BrainIcon, BrainLampIcon, MindPuzzleIcon, RelationsHandsIcon } from '@/app/(client)/shared/assets/icon'
import { Button, Card, CardBody } from '@heroui/react'
import { Clock4, CopyCheck, LucideArrowRight } from 'lucide-react'
import { FC } from 'react'

interface IProps {
  title: string
  description: string
  items: {
    icon: React.ReactNode
    title: string
    buttonTitle: string
    time: string
    questions: string
  }[]
}

const AvailableTestComponent: FC<Readonly<IProps>> = (props) => {
  const { title, description, items } = props
  return (
    <div className='relative z-0 py-6 md:py-8'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>{title}</h3>
      <p className='pt-2 text-center text-base md:text-lg'>{description}</p>
      <div className='grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:gap-6 md:pt-8 lg:grid-cols-4 lg:grid-rows-1'>
        {items.map((item, index) => (
          <Card key={index + item.title} className='border border-[#D9E7FF]'>
            <CardBody className='flex flex-col items-center gap-3 px-4 py-6 md:items-start'>
              {item.icon}
              <p className='text-secondary-800 text-start text-lg font-semibold'>{item.title}</p>
              <div className='flex flex-wrap gap-x-4 gap-y-2 text-sm'>
                <span className='text-secondary-500/80 flex items-center gap-2'>
                  <Clock4 size={16} /> {item.time}
                </span>
                <span className='text-secondary-500/80 flex items-center gap-2'>
                  <CopyCheck size={16} /> {item.questions}
                </span>
              </div>
              <Button
                radius='sm'
                color='primary'
                className='text-medium h-12 w-full px-8 py-2 whitespace-normal'
                isDisabled={index === items.length - 1}
                endContent={
                  index !== items.length - 1 && <LucideArrowRight className='h-4.5 w-4.5' size={18} strokeWidth={3} />
                }
              >
                {item.buttonTitle}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </div>
  )
}

export default AvailableTestComponent
