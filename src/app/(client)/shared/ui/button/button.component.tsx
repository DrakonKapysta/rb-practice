'use client'

import { forwardRef } from 'react'

import type { ButtonProps as HeroUIButtonProps } from '@heroui/button'
import { Button as HeroUIButton } from '@heroui/react'

export interface IProps extends HeroUIButtonProps {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost'
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  isDisabled?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, IProps>(
  ({ children, variant = 'solid', color = 'primary', size = 'md', ...props }, ref) => {
    return (
      <HeroUIButton ref={ref} variant={variant} color={color} size={size} {...props}>
        {children}
      </HeroUIButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
