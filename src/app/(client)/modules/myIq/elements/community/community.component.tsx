import { getTranslations } from 'next-intl/server'
import { FC } from 'react'

import { FacebookIcon, InstagramIcon, MetaIcon } from '@/app/(client)/shared/assets/icon'
import { Link } from '@/pkg/libraries/locale'

interface IProps {}

const links = [
  {
    icon: <MetaIcon className='mx-[0.685rem] h-12 w-6' />,
    href: 'https://www.twitter.com/',
  },
  {
    icon: <InstagramIcon className='mx-[0.685rem] h-12 w-6' />,
    href: 'https://www.instagram.com/',
  },
  {
    icon: <FacebookIcon className='mx-[0.685rem] h-12 w-6' />,
    href: 'https://www.facebook.com/',
  },
]

const CommunityComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('myIq.community')

  return (
    <section className='text-secondary-800/70 relative z-0 -mt-2 flex flex-col items-center justify-between gap-3 py-6 md:flex-row md:py-10'>
      <div>
        <h3 className='text-secondary-800 text-center text-2xl leading-11 font-semibold md:text-start md:text-4xl'>
          {t('community_title')}
        </h3>
        <p className='hidden text-lg lg:inline-block'>{t('community_description')}</p>
        <p className='text-secondary-800 text-center text-sm lg:hidden'>{t('community_mobile_description')}</p>
      </div>
      <div className='flex w-full justify-center gap-3 md:w-fit md:justify-start'>
        {links.map((link, index) => (
          <Link
            key={link.href + index}
            className='text-secondary-800 max-h-12 rounded-xl border border-[#007AFF] bg-white px-3 shadow-md md:px-6'
            href={link.href}
          >
            {link.icon}
          </Link>
        ))}
      </div>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </section>
  )
}

export default CommunityComponent
