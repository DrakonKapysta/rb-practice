'use client'

import { useTranslations } from 'next-intl'
import { FC, useState } from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'

import { Link } from '@/pkg/libraries/locale'

import { HeaderToolsComponent } from './elements/header-tools'
import { MobileLogoComponent } from './elements/mobile-logo'

interface IProps {}

const HeaderComponent: FC<Readonly<IProps>> = () => {
  const tHeader = useTranslations('header')
  const tNav = useTranslations('navigation')

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [{ label: tNav('characters'), href: '/' }]

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth='xl'
      className='bg-background/70 backdrop-blur-md'
      isBordered
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle aria-label={isMenuOpen ? tNav('close_menu') : tNav('menu')} />
      </NavbarContent>

      <MobileLogoComponent title={tHeader('title')} subtitle={tHeader('subtitle')} />

      <NavbarContent className='hidden gap-4 sm:flex' justify='start'>
        <NavbarBrand>
          <Link href='/' className='flex flex-col'>
            <p className='text-primary text-2xl font-bold'>{tHeader('title')}</p>
            <p className='text-default-500 text-sm'>{tHeader('subtitle')}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-6 sm:flex' justify='center'>
        {navigationItems.map((item, index) => (
          <NavbarItem key={`${item.href}-${index}`}>
            <Link href={item.href} className='text-default-700 hover:text-primary font-medium transition-colors'>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <HeaderToolsComponent />

      <NavbarMenu>
        {navigationItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link href={item.href} className='w-full text-lg' onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default HeaderComponent
