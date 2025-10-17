import { getTranslations } from 'next-intl/server'

import { LogoIcon, LogoMobileIcon } from '@/app/(client)/shared/assets/icon'
import { Button } from '@/app/(client)/shared/ui'
import { Link } from '@/pkg/libraries/locale'

import { HeaderDrawerComponent } from './elements/header-drawer'

const IqHeaderComponent = async () => {
  const t = await getTranslations('myIq.header')
  return (
    <header className='text-foreground shadow-small bg-background/70 fixed z-50 w-full border-b-1 backdrop-blur-lg backdrop-saturate-150'>
      <div className='relative mx-auto flex h-16 max-w-7xl items-center gap-1 px-4 md:px-6'>
        <Link className='flex-1' href='/'>
          <LogoMobileIcon className='xxs:hidden' fill='black' />

          <LogoIcon className='xxs:block hidden' fill='black' />
        </Link>

        <HeaderDrawerComponent />

        <div className='hidden flex-1 items-center justify-end gap-3 lg:flex'>
          <Button variant='ghost' radius='sm' color='primary' className='text-medium h-10.5'>
            {t('sign_in')}
          </Button>

          <Button radius='sm' color='primary' className='text-medium h-10.5'>
            {t('start_test')}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default IqHeaderComponent
