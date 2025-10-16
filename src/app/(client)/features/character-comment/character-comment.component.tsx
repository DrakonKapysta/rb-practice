import { FC } from 'react'

import { Card, CardBody, CardHeader, Spinner } from '@heroui/react'
import { useQuery } from '@tanstack/react-query'
import { MessageSquare } from 'lucide-react'

import { CommentsByCharacterIdQueryOptions } from '@/app/(client)/entities/api/comments'
import { OopsMessageComponent } from '@/app/(client)/shared/ui'

interface IProps {
  characterId: number
}

const CharacterCommentComponent: FC<Readonly<IProps>> = (props) => {
  const { characterId } = props

  const { data: comments, isLoading, error } = useQuery(CommentsByCharacterIdQueryOptions(characterId))

  if (isLoading) {
    return (
      <Card className='text-secondary-500'>
        <CardHeader>
          <h3 className='flex items-center gap-2 text-xl font-semibold'>
            <MessageSquare className='h-5 w-5' />
            <span className='text-default-500'>Comments</span>
          </h3>
        </CardHeader>
        <CardBody className='flex items-center justify-center py-8'>
          <Spinner />
        </CardBody>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className='text-secondary-500'>
        <CardHeader>
          <h3 className='flex items-center gap-2 text-xl font-semibold'>
            <MessageSquare className='h-5 w-5' />
            <span className='text-default-500'>Comments</span>
          </h3>
        </CardHeader>
        <CardBody>
          <OopsMessageComponent message='An error occurred while fetching comments.' />
        </CardBody>
      </Card>
    )
  }

  if (!comments || comments.length === 0) {
    return (
      <Card className='text-secondary-500'>
        <CardHeader>
          <h3 className='flex items-center gap-2 text-xl font-semibold'>
            <MessageSquare className='h-5 w-5' />

            <span className='text-default-500'>Comments</span>
          </h3>
        </CardHeader>

        <CardBody>
          <OopsMessageComponent message='No comments yet.' />
        </CardBody>
      </Card>
    )
  }

  return (
    <Card className='text-secondary-500'>
      <CardHeader>
        <h3 className='flex items-center gap-2 text-xl font-semibold'>
          <MessageSquare className='h-5 w-5' />
          <span className='text-default-500'>Comments</span> ({comments.length})
        </h3>
      </CardHeader>
      <CardBody>
        {comments.length > 0 ? (
          <div className='scrollbar-hide max-h-84 space-y-4 overflow-y-auto'>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className='border-default-200 bg-default-50 hover:bg-default-100 rounded-lg border p-4 transition-colors'
              >
                <div className='mb-2 flex items-start justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-primary-500 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold text-white'>
                      {comment.userId.substring(0, 2).toUpperCase()}
                    </div>
                    <span className='text-default-500 text-sm'>Anonymous</span>
                  </div>
                </div>
                <p className='text-default-700'>{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='py-8 text-center'>
            <MessageSquare className='text-default-300 mx-auto mb-2 h-12 w-12' />
            <p className='text-default-500'>No comments yet.</p>
          </div>
        )}
      </CardBody>
    </Card>
  )
}

export default CharacterCommentComponent
