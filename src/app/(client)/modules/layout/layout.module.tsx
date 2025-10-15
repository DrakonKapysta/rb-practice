import type { FC, ReactNode } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/ui'
import { HeaderComponent } from '@/app/(client)/widgets'
import { showMyIqHeader } from '@/pkg/integrations/growthbook'
import { MyIqHeaderComponent } from '../../widgets/my-iq/my-iq-header'

interface IProps {
  children: ReactNode
}

const LayoutModule: FC<IProps> = async (props) => {
  const { children } = props

  const isShowMyIqHeader = true

  return (
    <div className='my-iq flex min-h-screen flex-col'>
      {isShowMyIqHeader ? <MyIqHeaderComponent /> : <HeaderComponent />}
      <ContainerComponent className='relative flex-1' variant='main'>
        {children}
      </ContainerComponent>
    </div>
  )
}

export default LayoutModule
