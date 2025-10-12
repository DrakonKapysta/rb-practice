import type { FC, ReactNode } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/ui'
import { ThemeSwitcherComponent } from '@/app/(client)/widgets'

interface IProps {
  children: ReactNode
}

const LayoutModule: FC<IProps> = (props) => {
  const { children } = props

  return (
    <ContainerComponent className='relative flex-1' variant='main'>
      <ThemeSwitcherComponent className='absolute top-6 right-8' />
      {children}
    </ContainerComponent>
  )
}

export default LayoutModule
