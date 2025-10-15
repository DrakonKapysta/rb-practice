import BY from 'country-flag-icons/react/3x2/BY'
import PL from 'country-flag-icons/react/3x2/PL'
import RO from 'country-flag-icons/react/3x2/RO'
import UA from 'country-flag-icons/react/3x2/UA'
import US from 'country-flag-icons/react/3x2/US'
import { useTranslations } from 'next-intl'
import type { FC } from 'react'

interface IProps {}

const LATEST_RESULTS_ITEMS = {
  items: [
    {
      name: 'Roman Kharchenko',
      iq: 98,
      country: 'RO',
    },
    {
      name: 'Dmitrii Dovhalenko',
      iq: 104,
      country: 'BY',
    },

    {
      name: 'Jan Kowalski',
      iq: 102,
      country: 'PL',
    },

    {
      name: 'Oleksandr Fedorov',
      iq: 106,
      country: 'UA',
    },

    {
      name: 'John Doe',
      iq: 106,
      country: 'US',
    },

    {
      name: 'Jane Doe',
      iq: 106,
      country: 'US',
    },

    {
      name: 'Taras Tarasenko',
      iq: 106,
      country: 'UA',
    },

    {
      name: 'Yaroslav Yaroslavenko',
      iq: 106,
      country: 'RO',
    },

    {
      name: 'Andrii Andrienko',
      iq: 106,
      country: 'UA',
    },
  ] as const,
}

const COUNTRIES = {
  UA: <UA title='Ukraine' />,
  RO: <RO title='Romania' />,
  BY: <BY title='Belarus' />,
  PL: <PL title='Poland' />,
  US: <US title='United States' />,
} as const

const LatestResultsComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations('myIq.latestResults')

  return (
    <section className='pt-6 md:pt-10'>
      <h3 className='text-secondary-800 text-center text-2xl leading-8 font-semibold md:text-4xl'>
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
