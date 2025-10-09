'use client'

import { SwitchProps, useSwitch, VisuallyHidden } from '@heroui/react'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { DARK_THEME, LIGHT_THEME } from './theme-switcher.constants'

export const ThemeSwitcher = (props: SwitchProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch(props)

  if (!mounted) return null

  return (
    <div>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          onClick={() => setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME)}
          className={slots.wrapper({
            class: ['h-8 w-8', 'flex items-center justify-center', 'bg-default-100 hover:bg-default-200 rounded-lg'],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  )
}
