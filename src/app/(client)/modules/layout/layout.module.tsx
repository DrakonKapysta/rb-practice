import type { FC, ReactNode } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/ui'
import { IqFooterComponent } from '@/app/(client)/widgets/iq-footer'
import { IqHeaderComponent } from '@/app/(client)/widgets/iq-header'

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
