'use client'

import { forwardRef } from 'react'

import { cn, Input, InputProps } from '@heroui/react'

interface IProps extends InputProps {
  error?: string
}

const EmailInputComponent = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { error, className, ...rest } = props
  return (
    <div>
      <Input
        ref={ref}
        type='email'
        variant='bordered'
        isRequired
        {...rest}
        className={cn('text-secondary-500 placeholder:text-secondary-500', className)}
        classNames={{
          input: cn(
            'text-secondary-500',
            'autofill:text-secondary-500',
            'autofill:[-webkit-text-fill-color:hsl(var(--heroui-secondary-500))]',
            'autofill:shadow-[inset_0_0_0px_1000px_rgb(255_255_255)]',
          ),
        }}
      />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  )
})

EmailInputComponent.displayName = 'EmailInputComponent'

export default EmailInputComponent
