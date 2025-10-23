import { FC } from 'react'

import { Card, CardBody } from '@/app/(client)/shared/ui'

import { ICON_MAP } from '../../my-iq.constants'
import { useMessages, useTranslations } from 'next-intl'

interface IProps {}

const HowItWorksComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations('myIq.sections')

  const messages = useMessages()

  const itemKeys = Object.keys(messages.myIq.sections.how_it_works_items)

  return (
    <div id='how-it-works' className='scroll-mt-20 pb-6 md:pb-10'>
      <h3 className='text-secondary-800/90 text-center text-2xl font-semibold md:text-4xl'>{t('how_it_works')}</h3>

      <div className='flex flex-col gap-4 pt-6 md:flex-row md:gap-6 md:pt-8'>
        {itemKeys.map((key) => {
          const iconKey = t(`how_it_works_items.${key}.icon`) as keyof typeof ICON_MAP

          return (
            <Card key={key} className='text-secondary-800 flex-1 border border-[#D9E7FF]'>
              <CardBody className='relative flex h-auto w-full flex-auto flex-col gap-3 overflow-y-auto p-4 text-left break-words md:px-8 md:pt-[42px]'>
                {ICON_MAP[iconKey]}

                <p className='text-start text-lg font-semibold'>{t(`how_it_works_items.${key}.title`)}</p>

                <p className='text-start text-sm'>{t(`how_it_works_items.${key}.description`)}</p>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default HowItWorksComponent
