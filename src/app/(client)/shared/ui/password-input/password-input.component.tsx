'use client'

import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { forwardRef, useState } from 'react'

import { Button, cn, Input, InputProps } from '@heroui/react'

interface IProps extends InputProps {
  error?: string
}

const PasswordInputComponent = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { error, className, ...rest } = props
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
        className={cn('text-secondary-500', className)}
        classNames={{
          input: cn(
            'text-secondary-500',
            'autofill:text-secondary-500',
            'autofill:[-webkit-text-fill-color:hsl(var(--heroui-secondary-500))]',
            'autofill:shadow-[inset_0_0_0px_1000px_rgb(255_255_255)]',
          ),
        }}
        {...rest}
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
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
})

PasswordInputComponent.displayName = 'PasswordInputComponent'

export default PasswordInputComponent
