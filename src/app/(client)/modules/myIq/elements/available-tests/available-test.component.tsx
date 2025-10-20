import { Clock4, CopyCheck, LucideArrowRight } from 'lucide-react'
import { getMessages, getTranslations } from 'next-intl/server'
import { FC } from 'react'

import { Button, Card, CardBody } from '@/app/(client)/shared/ui'

import { AVAILABLE_TESTS_MAP } from '../../my-iq.constants'

interface IProps {}

const AvailableTestComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('myIq.availableTests')

  const messages = await getMessages()

  const itemKeys = Object.keys(messages.myIq.availableTests.available_tests_items)

  return (
    <div className='relative z-0 py-6 md:py-8'>
      <h3 className='text-secondary-800/90 text-center text-2xl font-semibold md:text-4xl'>{t('iq_test_title')}</h3>

      <p className='pt-2 text-center text-base md:text-lg'>{t('iq_test_description')}</p>

      <div className='grid grid-cols-1 gap-4 pt-6 md:grid-cols-2 md:gap-6 md:pt-8 lg:grid-cols-4 lg:grid-rows-1'>
        {itemKeys.map((key, index) => {
          const mappedItem = AVAILABLE_TESTS_MAP[key as keyof typeof AVAILABLE_TESTS_MAP]

          return (
            <Card key={key} className='border border-[#D9E7FF]'>
              <CardBody className='flex h-full flex-col items-center gap-3 px-4 py-6 md:items-start'>
                {mappedItem.icon}
                <p className='text-secondary-800 text-start text-lg font-semibold'>
                  {t(`available_tests_items.${key}.title`)}
                </p>

                <div className='flex flex-wrap gap-x-4 gap-y-2'>
                  <span className='text-secondary-500/80 flex items-center gap-2'>
                    <Clock4 size={16} /> {mappedItem.time} {t('time')}
                  </span>

                  <span className='text-secondary-500/80 flex items-center gap-2'>
                    <CopyCheck size={16} /> {mappedItem.questions} {t('questions')}
                  </span>
                </div>
                <div className='flex w-full flex-1 items-end'>
                  <Button
                    radius='md'
                    color='primary'
                    className='h-12 w-full px-6 py-2 text-sm whitespace-normal xl:text-base'
                    isDisabled={index === itemKeys.length - 1}
                    endContent={
                      index !== itemKeys.length - 1 && (
                        <LucideArrowRight className='h-4.5 w-4.5' size={16} strokeWidth={3} />
                      )
                    }
                  >
                    {t(`available_tests_items.${key}.button_title`)}
                  </Button>
                </div>
              </CardBody>
            </Card>
          )
        })}
      </div>

      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </div>
  )
}

export default AvailableTestComponent
