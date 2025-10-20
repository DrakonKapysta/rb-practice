import { FC } from 'react'

interface IProps {
  name: string
}

const CommentAvatarComponent: FC<Readonly<IProps>> = (props) => {
  const { name } = props

  return (
    <div className='flex items-center gap-2'>
      <div className='bg-primary-500 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white'>
        {name.substring(0, 2).toUpperCase()}
      </div>

      <span className='text-default-500 text-sm'>Anonymous</span>
    </div>
  )
}

export default CommentAvatarComponent
