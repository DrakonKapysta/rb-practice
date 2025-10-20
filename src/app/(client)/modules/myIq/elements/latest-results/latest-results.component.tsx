import { getTranslations } from 'next-intl/server'
import type { FC } from 'react'

import { COUNTRIES, LATEST_RESULTS_ITEMS } from '../../my-iq.constants'

interface IProps {}

const LatestResultsComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('myIq.latestResults')

  return (
    <section className='pt-6 md:pt-10'>
      <h3 className='text-secondary-800/90 text-center text-2xl leading-8 font-semibold md:text-4xl'>
        {t('latest_results_title')}
      </h3>

      <div className='[&>div>div] flex flex-wrap gap-6 pt-4 md:pt-6'>
        <div className='flex-1 [&>*:nth-child(even)]:bg-[#F6FBFF]'>
          {LATEST_RESULTS_ITEMS.items

            .slice(0, Math.ceil((LATEST_RESULTS_ITEMS.items.length - 1) / 2))

            .map((item, index) => (
              <div key={index + item.name} className='flex items-center justify-between gap-2 px-6 py-6'>
                <div className='flex items-center gap-4'>
                  <div className='relative h-8 w-11 overflow-hidden rounded-sm'>{COUNTRIES[item.country]}</div>

                  <span className='text-secondary-800 text-lg font-medium'>{item.name}</span>
                </div>

                <span className='px-2 py-1 text-base font-medium text-[#006FEE] md:text-xl'>IQ {item.iq}</span>
              </div>
            ))}
        </div>

        <div className='hidden flex-1 lg:block lg:[&>*:nth-child(even)]:bg-[#F6FBFF]'>
          {LATEST_RESULTS_ITEMS.items.slice(Math.ceil(LATEST_RESULTS_ITEMS.items.length / 2)).map((item, index) => (
            <div key={index + item.name} className='flex items-center justify-between gap-2 px-6 py-6'>
              <div className='flex items-center gap-4'>
                <div className='relative h-8 w-11 overflow-hidden rounded-sm'>{COUNTRIES[item.country]}</div>

                <span className='text-secondary-800 text-lg font-medium'>{item.name}</span>
              </div>

              <span className='px-2 py-1 text-base font-medium text-[#006FEE] md:text-xl'>IQ {item.iq}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestResultsComponent
