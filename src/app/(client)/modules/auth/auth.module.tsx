'use client'

import { FC, useState } from 'react'

import { Button } from '@heroui/react'

import { LoginFormComponent, RegisterFormComponent } from '@/app/(client)/widgets'

interface IProps {
  defaultType?: 'login' | 'register'
}

const AuthModule: FC<Readonly<IProps>> = (props) => {
  const { defaultType = 'login' } = props

  const [formType, setFormType] = useState<(typeof props)['defaultType']>(defaultType)

  const handleToggleForm = () => {
    setFormType(formType === 'login' ? 'register' : 'login')
  }

  return (
    <div className='w-full max-w-md'>
      {formType === 'login' ? <LoginFormComponent /> : <RegisterFormComponent />}

      <div className='bg-secondary -mt-2.5 rounded-b-2xl pt-4 pb-2 text-center'>
        <Button variant='light' onPress={handleToggleForm} size='lg'>
          {formType === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
        </Button>
      </div>
    </div>
  )
}

export default AuthModule
