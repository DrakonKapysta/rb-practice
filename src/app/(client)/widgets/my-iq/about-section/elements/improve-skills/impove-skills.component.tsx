'use client'

import { Card, CardBody } from '@heroui/react'
import { Check } from 'lucide-react'
import { FC } from 'react'

interface IProps {}

const ImproveSkillsComponent: FC<Readonly<IProps>> = () => {
  return (
    <div className='py-6 md:py-10'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>Розвивайте свої здібності</h3>
      <p className='pt-2 text-center text-base md:text-lg'>
        Розкрийте свій потенціал з нашим комплексним навчальним пакетом
      </p>
      <div className='flex gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        <Card className='flex-1 border border-[#D9E7FF]'>
          <CardBody className='text-secondary-800 flex flex-col gap-3 px-4 py-6'>
            <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='text-secondary-800 flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-semibold'>
                1
              </div>
            </div>
            <p className='text-lg font-semibold'>Експертні відеокурси</p>
            <ul className='flex flex-col gap-2'>
              <li className='relative pl-6'>
                <p className='text-sm'>20+ годин експертного навчання</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>Легкі для сприйняття уроки</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>Навчайтеся у власному темпі</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>Відстежуйте свій прогрес</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card className='flex-1 border border-[#D9E7FF]'>
          <CardBody className='text-secondary-800 flex flex-col gap-3 px-4 py-6'>
            <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='text-secondary-800 flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-semibold'>
                2
              </div>
            </div>
            <p className='text-lg font-semibold'>Ігри для тренування мозку</p>
            <ul className='flex flex-col gap-2'>
              <li className='relative pl-6'>
                <p className='text-sm'>Різноманітні вправи для тренування когнітивних здібностей</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>Прогресивні рівні складності</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>
                  Покращте 5 основних розумових навичок: Пам&apos;ять, логічне мислення, майстерність у вирішенні
                  проблем, фокус і концентрація.
                </p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>

        <Card className='flex-1 border border-[#D9E7FF]'>
          <CardBody className='text-secondary-800 flex flex-col gap-3 px-4 py-6'>
            <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
              <div className='text-secondary-800 flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-semibold'>
                3
              </div>
            </div>
            <p className='text-lg font-semibold'>Головоломки</p>
            <ul className='flex flex-col gap-2'>
              <li className='relative pl-6'>
                <p className='text-sm'>150+ головоломок для розвитку інтелекту</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>Розумне прогресування складності</p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
              <li className='relative pl-6'>
                <p className='text-sm'>
                  Опануйте основні функції мозку: Розпізнавання Закономірностей, Стратегічне Мислення, Аналітичне
                  Міркування.
                </p>
                <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                  <Check color='#007AFF' size={18} />
                </div>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default ImproveSkillsComponent
