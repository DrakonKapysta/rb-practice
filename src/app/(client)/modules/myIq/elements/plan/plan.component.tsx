import { Check } from 'lucide-react'
import { FC } from 'react'

import { Divider } from '@heroui/react'

import { Button, Card, CardBody, CardFooter, CardHeader } from '@/app/(client)/shared/ui'
import { Link } from '@/pkg/libraries/locale'
import { useMessages, useTranslations } from 'next-intl'
interface IProps {}

const PlanComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations('myIq.plans')

  const messages = useMessages()

  const itemKeys = Object.keys(messages.myIq.plans.plans_items)

  return (
    <section className='text-secondary-800 py-6 md:py-10'>
      <h3 className='text-secondary-800/90 text-center text-2xl font-semibold md:text-4xl'>{t('plans_title')}</h3>

      <p className='pt-2 text-center text-base md:text-lg'>{t('plans_description')}</p>

      <div className='flex items-center justify-center gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        <div className='flex flex-col gap-4 sm:flex-row'>
          {itemKeys.map((itemKey, index) => {
            const item = messages.myIq.plans.plans_items[itemKey]

            const benefitKeys = Object.keys(item.benefits)

            return (
              <Card
                key={index + item.title}
                className='text-secondary-800 border-default-200 max-w-[362px] flex-1 border p-3 shadow-xl hover:scale-105'
              >
                <CardHeader className='pb-6'>
                  <h4 className='text-lg font-semibold'>{t(`plans_items.${itemKey}.title`)}</h4>
                </CardHeader>

                <Divider className='mb-1.5 bg-black' />

                <CardBody>
                  <div className='flex flex-col gap-8'>
                    <p>
                      <span className='inline text-4xl leading-7 font-semibold tracking-tight'>
                        {t(`plans_items.${itemKey}.price`)}*
                      </span>
                      <span className='text-default-400 text-small font-medium'>
                        /{t(`plans_items.${itemKey}.period`)}
                      </span>
                    </p>

                    <ul className='text-default-500 flex flex-col gap-2'>
                      {benefitKeys.map((benefitKey) => (
                        <li key={benefitKey} className='relative pl-8 text-lg'>
                          <p className='text-base'>{t(`plans_items.${itemKey}.benefits.${benefitKey}`)}</p>
                          <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                            <Check color='#007AFF' size={24} strokeWidth={2.5} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardBody>

                <CardFooter>
                  <Button radius='sm' color='primary' className='text-medium h-[2.625rem] w-full px-8'>
                    {t('plans_button')}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
      <p className='mt-4 text-center text-[15px] leading-5'>
        *{t('plans_pricing_page_description_part1')}{' '}
        <Link href='/pricing' className='text-primary-900 underline'>
          {t('plans_pricing_page_description_part2')}
        </Link>
        , {t('plans_pricing_page_description_part3')}
      </p>
    </section>
  )
}

export default PlanComponent
