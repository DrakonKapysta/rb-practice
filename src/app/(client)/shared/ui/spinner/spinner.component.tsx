'use client'

import { cn, Spinner as HeroUISpinner, SpinnerProps } from '@heroui/react'
import { FC } from 'react'

interface IProps extends SpinnerProps {}

const Spinner: FC<Readonly<IProps>> = (props) => {
  const { className, ...rest } = props
  return (
    <div className='flex flex-1 items-center justify-center'>
      <HeroUISpinner {...rest} className={cn(className)} />
    </div>
  )
}

export { Spinner }
