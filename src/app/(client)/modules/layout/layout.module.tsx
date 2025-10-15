import type { FC, ReactNode } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/ui'
import { IqFooterComponent, IqHeaderComponent } from '@/app/(client)/widgets'

interface IProps {
  children: ReactNode
}

const LayoutModule: FC<IProps> = async (props) => {
  const { children } = props

  return (
    <div className='my-iq flex min-h-screen flex-col'>
      <IqHeaderComponent />
      <ContainerComponent className='relative flex-1' variant='main'>
        {children}
      </ContainerComponent>
      <IqFooterComponent />
    </div>
  )
}

export default LayoutModule
