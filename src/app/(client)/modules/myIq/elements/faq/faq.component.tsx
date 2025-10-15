'use client'
import { useMessages, useTranslations } from 'next-intl'
import type { FC } from 'react'

import { Accordion, AccordionItem } from '@heroui/react'

interface IProps {}

const FaqComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations('myIq.faq')
  const messages = useMessages()

  const itemKeys = Object.keys(messages.myIq.faq.faq_items)

  return (
    <div className='relative z-0 flex flex-col gap-6 py-6 md:py-10 lg:flex-row lg:gap-14'>
      <h2 className='text-secondary-800 text-center text-2xl leading-8 font-semibold md:text-4xl md:leading-12 lg:text-start'>
        {t('faq_title')}
      </h2>
      <Accordion selectionMode='multiple'>
        {itemKeys.map((itemKey) => {
          return (
            <AccordionItem
              key={itemKey}
              aria-label={t(`faq_items.${itemKey}.title`)}
              title={t(`faq_items.${itemKey}.title`)}
              classNames={{
                title: 'text-secondary-800 text-base md:text-lg font-medium',
                indicator: 'text-secondary-800 text-lg',
              }}
            >
              <span className='text-default-600'>{t(`faq_items.${itemKey}.answer`)}</span>
            </AccordionItem>
          )
        })}
      </Accordion>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </div>
  )
}

export default FaqComponent
