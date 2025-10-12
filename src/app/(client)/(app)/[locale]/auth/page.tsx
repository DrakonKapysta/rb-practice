import { FC } from 'react'

import AuthModule from '@/app/(client)/modules/auth/auth.module'

interface IProps extends PageProps<'/[locale]/auth'> {}

const AuthPage: FC<Readonly<IProps>> = async () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <AuthModule />
    </div>
  )
}

export default AuthPage
