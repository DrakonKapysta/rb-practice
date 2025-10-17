import { getTranslations } from 'next-intl/server'
import React, { FC } from 'react'

import { Divider } from '@heroui/react'

import { LanguageSwitcherComponent } from '@/app/(client)/features/language-switcher'
import {
  ApplePayIcon,
  FacebookIcon,
  GooglePayIcon,
  InstagramIcon,
  LogoIcon,
  LogoMobileIcon,
  MasterCardIcon,
  MetaIcon,
  PayPalIcon,
  RedditIcon,
  SupportIcon,
  VisaIcon,
} from '@/app/(client)/shared/assets/icon'
import { Link } from '@/pkg/libraries/locale'

interface IProps {}

const IqFooterComponent: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('myIq.footer')

  return (
    <footer className='z-10 mt-6 bg-[#001B36] py-6 lg:py-12'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 px-4 md:px-6'>
        <div className='flex flex-col justify-between gap-4 md:flex-row'>
          <div className='flex flex-col gap-6'>
            <Link
              className='[&amp;_svg]:h-[31px] [&amp;_svg]:w-[108px] pointer-events:none w-fit flex-shrink-0'
              aria-label='Logo'
              href='/uk-UA'
            >
              <LogoIcon className='xxs:block hidden' />

              <LogoMobileIcon className='xxs:hidden' />
            </Link>

            <ul className='flex gap-4 text-white'>
              <li>
                <RedditIcon />
              </li>
              <li>
                <MetaIcon />
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <FacebookIcon />
              </li>
            </ul>
          </div>

          <div className='flex flex-col font-medium md:flex-row md:gap-10'>
            <div className='mr-5 flex flex-col gap-4 font-semibold text-white md:mr-16'>
              <p className='text-lg'>{t('support_title')}</p>

              <Link href='#' className='font-medium text-white'>
                {t('cancel_subscription')}
              </Link>

              <Link
                href='#'
                className='mb-4 flex max-w-fit items-center gap-2 rounded-4xl border-2 px-4 py-2 text-white'
              >
                <SupportIcon />

                <p className='text-sm font-medium whitespace-nowrap text-white'>
                  <span>{t('support_title')}</span>
                  <br />
                  24/7/365
                </p>
              </Link>
            </div>

            <div className='flex flex-col gap-2 pr-10 [&>*]:text-white'>
              <p className='pb-2 text-lg font-semibold'>{t('legal_title')}</p>

              <Link href='#'>{t('privacy_policy')}</Link>
              <Link href='#'>{t('terms_conditions')}</Link>
              <Link href='#'>{t('cookie_policy')}</Link>
              <Link href='#'>{t('refund_policy')}</Link>
            </div>

            <div className='flex flex-col gap-2 [&>*]:text-white'>
              <p className='pb-2 text-lg font-semibold'>{t('about_title')}</p>

              <Link href='#'>{t('help_center')}</Link>
              <Link href='#'>{t('blog')}</Link>
              <Link href='#'>{t('reviews')}</Link>
              <Link href='#'>{t('pricing')}</Link>
            </div>
          </div>
        </div>

        <Divider className='bg-default-500 mt-4' />

        <div className='flex flex-col gap-2'>
          <div className='self-end'>
            <LanguageSwitcherComponent />
          </div>

          <div className='flex flex-col gap-4 text-white lg:flex-row lg:justify-between'>
            <p>{t('copyright')} © 2024-2025 </p>

            <div className='flex gap-2 lg:self-end'>
              <div className='flex h-8 w-[2.875rem] items-center justify-center rounded-lg bg-white p-0.5'>
                <VisaIcon />
              </div>

              <div className='flex h-8 w-[2.875rem] items-center justify-center rounded-lg bg-white p-0.5'>
                <MasterCardIcon />
              </div>

              <div className='flex h-8 w-[2.875rem] items-center justify-center rounded-lg bg-white p-0.5'>
                <PayPalIcon />
              </div>

              <div className='flex h-8 w-[2.875rem] items-center justify-center rounded-lg bg-white p-0.5'>
                <ApplePayIcon />
              </div>

              <div className='flex h-8 w-[2.875rem] items-center justify-center rounded-lg bg-white p-0.5'>
                <GooglePayIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default IqFooterComponent
