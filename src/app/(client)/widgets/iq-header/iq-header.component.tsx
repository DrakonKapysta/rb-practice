import { getTranslations } from 'next-intl/server'

import { LogoIcon, LogoMobileIcon } from '@/app/(client)/shared/assets/icon'
import { Button } from '@/app/(client)/shared/ui'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@/app/(client)/shared/ui/navbar'
import { Link } from '@/pkg/libraries/locale'

import { HeaderDrawerComponent } from './elements/header-drawer'

const IqHeaderComponent = async () => {
  const t = await getTranslations('myIq.header')
  return (
    <Navbar
      maxWidth='xl'
      classNames={{
        wrapper: 'xxl:px-0',
      }}
      className='text-foreground shadow-small bg-background/70 fixed z-50 w-full border-b-1 backdrop-blur-lg backdrop-saturate-150'
    >
      <NavbarBrand>
        <Link className='flex-1' href='/'>
          <LogoMobileIcon className='xxs:hidden' fill='black' />

          <LogoIcon className='xxs:block hidden' fill='black' />
        </Link>
      </NavbarBrand>

      <NavbarContent justify='end' className='hidden gap-3 lg:flex'>
        <NavbarItem>
          <Link href='/'>
            <Button variant='ghost' radius='sm' color='primary' className='text-medium h-10.5'>
              {t('sign_in')}
            </Button>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link href='/'>
            <Button radius='sm' color='primary' className='text-medium h-10.5'>
              {t('start_test')}
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <HeaderDrawerComponent />
    </Navbar>
  )
}

export default IqHeaderComponent
