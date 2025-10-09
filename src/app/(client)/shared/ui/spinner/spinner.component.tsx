'use client'
import { Spinner as HeroUISpinner } from '@heroui/react'

export interface ISpinnerProps {
  size?: 'sm' | 'md' | 'lg'
}

export const Spinner = ({ size = 'lg' }: ISpinnerProps) => {
  return (
    <div className='flex items-center justify-center py-8'>
      <HeroUISpinner size={size} />
    </div>
  )
}
