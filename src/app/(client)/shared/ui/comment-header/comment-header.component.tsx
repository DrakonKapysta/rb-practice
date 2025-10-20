import { MessageSquare } from 'lucide-react'
import { FC } from 'react'

import { CardHeader } from '@/app/(client)/shared/ui'

interface IProps {
  commentsCount: number
}

const CommentHeaderComponent: FC<Readonly<IProps>> = (props) => {
  const { commentsCount } = props

  return (
    <CardHeader>
      <h3 className='flex items-center gap-2 text-xl font-semibold'>
        <MessageSquare className='h-5 w-5' />
        <span className='text-default-500'>Comments</span> ({commentsCount})
      </h3>
    </CardHeader>
  )
}

export default CommentHeaderComponent
