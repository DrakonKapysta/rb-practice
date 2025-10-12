'use client'

import { forwardRef } from 'react'

import { Input, InputProps } from '@heroui/react'

interface IProps extends InputProps {
  error?: string
}

const EmailInputComponent = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  return (
    <div>
      <Input ref={ref} type='email' variant='bordered' isRequired {...props} />
      {props.error && <p className='text-red-500'>{props.error}</p>}
    </div>
  )
})

EmailInputComponent.displayName = 'EmailInputComponent'

export default EmailInputComponent
