'use client'

import { GlobeIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'

import { Button, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'
import { Dropdown } from '@heroui/react'

import { usePathname, useRouter } from '@/pkg/libraries/locale'

const LanguageSwitcherComponent = () => {
  const t = useTranslations('header')

  const locale = useLocale()

  const pathname = usePathname()

  const router = useRouter()

  const handleLanguageChange = (newLocale: string) => {
    const pathnameWithoutLocale = pathname.replace(/^\/(en|ua)/, '')
    router.replace(pathnameWithoutLocale, { locale: newLocale })
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='light' isIconOnly aria-label={t('language')}>
          <GlobeIcon className='h-5 w-5' />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label={t('language')} onAction={(key) => handleLanguageChange(key as string)}>
        <DropdownItem key='en' textValue={t('switch_to_english')} className={locale === 'en' ? 'bg-default-100' : ''}>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>🇬🇧</span>
            <span>English</span>
            {locale === 'en' && <span className='text-primary ml-auto'>✓</span>}
          </div>
        </DropdownItem>

        <DropdownItem key='ua' textValue={t('switch_to_ukrainian')} className={locale === 'ua' ? 'bg-default-100' : ''}>
          <div className='flex items-center gap-2'>
            <span className='text-lg'>🇺🇦</span>
            <span>Українська</span>
            {locale === 'ua' && <span className='text-primary ml-auto'>✓</span>}
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageSwitcherComponent
