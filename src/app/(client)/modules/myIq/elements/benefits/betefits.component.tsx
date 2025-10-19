import { getMessages, getTranslations } from 'next-intl/server'
import { FC } from 'react'

import { EdgedBadgeIcon } from '@/app/(client)/shared/assets/icon'
import { Card, CardBody, ScrollShadow } from '@/app/(client)/shared/ui'

interface IProps {}

const BenefitsComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('myIq.benefits')

  const messages = await getMessages()

  const itemKeys = Object.keys(messages.myIq.benefits.benefits_items)

  return (
    <div className='relative z-0 flex flex-col gap-2 py-6 md:py-10'>
      <h4 className='text-secondary-800/90 text-center text-2xl font-semibold md:text-4xl'>{t('benefits_title')}</h4>

      <ScrollShadow
        hideScrollBar
        className='flex w-[calc(100vw-3rem)] gap-6 pt-5'
        offset={100}
        orientation='horizontal'
      >
        {itemKeys.map((key) => {
          return (
            <Card key={key} radius='sm' className='max-w-58 shrink-0 border border-[#D9E7FF]'>
              <CardBody className='flex-row gap-3 px-4 py-6'>
                <div>
                  <EdgedBadgeIcon />
                </div>

                <p className='text-secondary-800/80 block flex-1 text-start text-sm'>
                  {t(`benefits_items.${key}.description`)}
                </p>
              </CardBody>
            </Card>
          )
        })}
      </ScrollShadow>

      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </div>
  )
}

export default BenefitsComponent
