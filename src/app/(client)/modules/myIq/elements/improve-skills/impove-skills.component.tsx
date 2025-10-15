'use client'

import { Card, CardBody } from '@heroui/react'
import { Check } from 'lucide-react'
import { FC } from 'react'

interface IProps {
  title: string
  description: string
  items: {
    title: string
    subItems: {
      description: string
    }[]
    icon: React.ReactNode
  }[]
}

const ImproveSkillsComponent: FC<Readonly<IProps>> = (props) => {
  const { title, description, items } = props
  return (
    <div className='py-6 md:py-10'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>{title}</h3>
      <p className='pt-2 text-center text-base md:text-lg'>{description}</p>
      <div className='flex flex-col gap-3 pt-5 md:gap-6 md:pt-8 lg:flex-row'>
        {items.map((item, index) => (
          <Card key={index} className='flex-1 border border-[#D9E7FF]'>
            <CardBody className='text-secondary-800 flex flex-col gap-3 px-4 py-6'>
              <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
                <div className='text-secondary-800 flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-semibold'>
                  {index + 1}
                </div>
              </div>
              <p className='text-lg font-semibold'>{item.title}</p>
              <ul className='flex flex-col gap-2'>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className='relative pl-6'>
                    <p className='text-sm'>{subItem.description}</p>
                    <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                      <Check color='#007AFF' size={18} />
                    </div>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ImproveSkillsComponent
