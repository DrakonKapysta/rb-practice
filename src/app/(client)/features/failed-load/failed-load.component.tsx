import { cn } from '@heroui/theme'
import { IFailedLoadProps } from './failed-load.interface'

export const FailedLoad = ({ message, back, className, ...props }: IFailedLoadProps) => {
  return (
    <div className={cn('text-danger py-8 text-center', className)} {...props}>
      <p className='text-inherit'>{message}</p>
      {back}
    </div>
  )
}
