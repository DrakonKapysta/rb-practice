'use client'
import {Button as HeroUIButton } from '@heroui/react'
import { forwardRef } from 'react';
import type { ButtonProps as HeroUIButtonProps } from '@heroui/button';

export interface IButtonProps extends HeroUIButtonProps {
  variant?: 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  isDisabled?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, variant = 'solid', color = 'primary', size = 'md', ...props }, ref) => {
    return (
      <HeroUIButton
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        {...props}
      >
        {children}
      </HeroUIButton>
    );
  }
);

Button.displayName = 'Button';
