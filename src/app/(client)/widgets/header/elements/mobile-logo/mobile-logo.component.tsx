import { FC } from 'react'

import { NavbarBrand, NavbarContent } from '@heroui/react'

import { Link } from '@/pkg/libraries/locale'

interface IProps {
  title: string
  subtitle?: string
}

const MobileLogoComponent: FC<Readonly<IProps>> = (props) => {
  const { title, subtitle } = props

  return (
    <NavbarContent className='pr-3 sm:hidden' justify='center'>
      <NavbarBrand>
        <Link href='/' className='flex flex-col'>
          <p className='text-primary text-xl font-bold'>{title}</p>
          <p className='text-default-500 text-xs'>{subtitle}</p>
        </Link>
      </NavbarBrand>
    </NavbarContent>
  )
}

export default MobileLogoComponent
