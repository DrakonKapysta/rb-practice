import type { FC, ReactNode } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/ui'
import { HeaderComponent } from '@/app/(client)/widgets'

interface IProps {
  children: ReactNode
}

const LayoutModule: FC<IProps> = (props) => {
  const { children } = props

  return (
    <div className='flex min-h-screen flex-col'>
      <HeaderComponent />
      <ContainerComponent className='relative flex-1' variant='main'>
        {children}
      </ContainerComponent>
    </div>
  )
}

export default LayoutModule
