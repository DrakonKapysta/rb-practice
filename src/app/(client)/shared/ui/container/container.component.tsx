import { FC } from 'react'

import { cn } from '@heroui/react'

interface IProps {
  children: React.ReactNode
  className?: string
  variant?: 'main' | 'section'
}

const ContainerComponent: FC<Readonly<IProps>> = (props) => {
  const { children, className = '', variant = 'main' } = props

  return (
    <>
      {variant === 'main' ? (
        <main
          className={cn(
            `mx-auto flex min-h-[calc(100vh-60px)] w-full max-w-screen-lg flex-col gap-6 px-4 pt-4 pb-8 md:px-6`,
            className,
          )}
        >
          {children}
        </main>
      ) : (
        <section className={cn(`mx-auto flex w-full max-w-screen-lg flex-col gap-4`, className)}>{children}</section>
      )}
    </>
  )
}

export default ContainerComponent