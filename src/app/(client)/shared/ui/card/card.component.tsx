import { Card as HeroUICard, CardBody, CardHeader, CardFooter } from '@heroui/card'
import { forwardRef } from 'react'
import type { CardProps as HeroUICardProps } from '@heroui/card'

export interface ICardProps extends HeroUICardProps {
  children: React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  isPressable?: boolean
  isHoverable?: boolean
}

export const Card = forwardRef<HTMLDivElement, ICardProps>(
  ({ children, header, footer, isPressable, isHoverable, ...props }, ref) => {
    return (
      <HeroUICard ref={ref} isPressable={isPressable} isHoverable={isHoverable} {...props}>
        {header && <CardHeader>{header}</CardHeader>}
        <CardBody>{children}</CardBody>
        {footer && <CardFooter>{footer}</CardFooter>}
      </HeroUICard>
    )
  },
)

Card.displayName = 'Card'
