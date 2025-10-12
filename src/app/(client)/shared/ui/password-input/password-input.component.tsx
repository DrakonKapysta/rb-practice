'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { forwardRef, useState } from 'react'

import { Button, Input, InputProps } from '@heroui/react'

interface IProps extends InputProps {
  error?: string
}

const PasswordInputComponent = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const handleToggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <div>
      <Input
        ref={ref}
        type={isVisible ? 'text' : 'password'}
        variant='bordered'
        isRequired
        {...props}
        endContent={
          <Button onPress={handleToggleVisibility} className='left-2.5' variant='light' size='sm'>
            {isVisible ? (
              <EyeOffIcon className='text-default-400 pointer-events-none h-5 w-5' />
            ) : (
              <EyeIcon className='text-default-400 pointer-events-none h-5 w-5' />
            )}
          </Button>
        }
      />
      {props.error && <p className='text-red-500'>{props.error}</p>}
    </div>
  )
})

PasswordInputComponent.displayName = 'PasswordInputComponent'

export default PasswordInputComponent
