'use client'

import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { cn } from '@heroui/react'

interface IProps extends ComponentPropsWithoutRef<'div'> {
  message: string
  back?: ReactNode
}

const OopsMessageComponent: FC<Readonly<IProps>> = (props) => {
  const { message, back, className, ...rest } = props

  return (
    <div className={cn('text-danger py-8 text-center', className)} {...rest}>
      <p className='text-inherit'>{message}</p>
      {back}
    </div>
  )
}

export default OopsMessageComponent
