import type { Config } from 'tailwindcss'

import { heroui } from '@heroui/react'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/*.html', './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      xxs: '364px',
      xs: '480px',
      xxl: '1328px',
    },
  },
  plugins: [
    heroui({
      themes: {
        'my-iq': {
          extend: 'dark',
          colors: {
            background: '#ffffff',
            foreground: '#ffffff',
            primary: {
              50: '#defefd',
              100: '#CBF8E4',
              200: '#9BF1D2',
              300: '#63D6B7',
              400: '#39AD99',
              500: '#0D776E',
              600: '#096566',
              700: '#064E55',
              800: '#043845',
              900: '#022939',
              DEFAULT: '#0D776E',
              foreground: '#ffffff',
            },
            secondary: {
              100: '#EEEEF2',
              200: '#D5D7E5',
              300: '#C6C8D9',
              400: '#888CAD',
              500: '#2B2D42',
              600: '#0D0F20',
              700: '#0A0B19',
              800: '#070813',
              900: '#060610',
            },
            default: {
              50: '#fafafa',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              400: '#a1a1aa',
              500: '#71717a',
              600: '#52525b',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
              DEFAULT: '#ffffff',
              foreground: '#2B2D42',
            },
            content1: '#ffffff',
            content2: '#f4f4f5',
            content3: '#e4e4e7',
            content4: '#d4d4d8',
            divider: '#e4e4e7',
          },
          layout: {
            fontSize: {
              tiny: '0.75rem',
              small: '0.875rem',
              medium: '1rem',
              large: '1.125rem',
            },
            radius: {
              small: '8px',
              medium: '12px',
              large: '16px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
            boxShadow: {
              small: '0px 0px 3px 0px rgba(0, 0, 0, 0.25), 0px 2px 5px 0px rgba(0, 0, 0, 0.06)',
              medium: '0px 4px 6px rgba(44, 51, 69, 0.1), 0px 2px 4px rgba(44, 51, 69, 0.06)',
              large: '0px 10px 15px rgba(44, 51, 69, 0.1), 0px 4px 6px rgba(44, 51, 69, 0.05)',
            },
          },
        },
      },
    }),
  ],
}

export default config
