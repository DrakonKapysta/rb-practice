import { FC } from 'react'

interface IProps {
  className?: string
  width?: number
  height?: number
}

const SupportIcon: FC<IProps> = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='h-6 w-6 shrink-0'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z'
      ></path>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M21 16v2a4 4 0 0 1-4 4h-5'
      ></path>
    </svg>
  )
}

export default SupportIcon
