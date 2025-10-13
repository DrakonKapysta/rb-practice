import { FC } from 'react'

import { NavbarContent, NavbarItem } from '@heroui/react'

import { LanguageSwitcherComponent } from '@/app/(client)/features/language-switcher'
import { ThemeSwitcherComponent } from '@/app/(client)/widgets/theme-switcher'

interface IProps {}

const HeaderToolsComponent: FC<Readonly<IProps>> = () => {
  return (
    <NavbarContent justify='end'>
      <NavbarItem>
        <ThemeSwitcherComponent />
      </NavbarItem>

      <NavbarItem>
        <LanguageSwitcherComponent />
      </NavbarItem>
    </NavbarContent>
  )
}

export default HeaderToolsComponent
