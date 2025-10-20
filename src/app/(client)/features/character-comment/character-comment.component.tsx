'use client'

import { Edit, MessageSquare, Save, Trash2, X } from 'lucide-react'
import { FC, useRef, useState } from 'react'

import { addToast, Button, Card, CardBody, CardHeader, cn, Spinner, Textarea } from '@heroui/react'
import { useMutation, useQuery } from '@tanstack/react-query'

import {
  commentsByCharacterIdQueryOptions,
  deleteCommentMutatationOptions,
  updateCommentMutationOptions,
} from '@/app/(client)/entities/api'
import { IComment } from '@/app/(client)/entities/models'
import { CommentAvatarComponent, CommentHeaderComponent, OopsMessageComponent } from '@/app/(client)/shared/ui'

interface IProps {
  characterId: number
}

const CharacterCommentComponent: FC<Readonly<IProps>> = (props) => {
  const { characterId } = props

  const [deleteCommentId, setDeleteCommentId] = useState<number | null>(null)
  const [editCommentId, setEditCommentId] = useState<number | null>(null)

  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const {
    data: comments,
    isLoading,
    error,
  } = useQuery(commentsByCharacterIdQueryOptions(characterId, { orderDirection: 'asc' }))

  const {
    mutateAsync: updateComment,
    isPending: isUpdatingComment,
    error: updateCommentError,
  } = useMutation(updateCommentMutationOptions())

  const {
    mutateAsync: deleteComment,
    isPending: isDeletingComment,
    error: deleteCommentError,
  } = useMutation(deleteCommentMutatationOptions())

  const handleDeleteComment = async (commentId: number) => {
    setDeleteCommentId(commentId)

    await deleteComment({ commentId, characterId })

    if (deleteCommentError) {
      setDeleteCommentId(null)
      return addToast({
        title: 'Error',
        description: 'An error occurred while deleting the comment',
        color: 'danger',
      })
    }

    addToast({
      title: 'Success',
      description: 'Comment deleted successfully',
      color: 'success',
    })
  }

  const handleStartEditComment = (commentId: number) => {
    setEditCommentId(commentId)
  }

  const handleCancelEditComment = () => {
    setEditCommentId(null)
  }

  const handleSaveEditComment = async (comment: IComment) => {
    await updateComment({
      commentId: comment.id,
      comment: { content: textareaRef.current?.value || comment.content, characterId: comment.characterId },
    })

    if (updateCommentError) {
      setEditCommentId(null)
      return addToast({
        title: 'Error',
        description: 'An error occurred while updating the comment',
        color: 'danger',
      })
    }

    addToast({
      title: 'Success',
      description: 'Comment updated successfully',
      color: 'success',
    })

    setEditCommentId(null)
  }

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
      <CommentHeaderComponent commentsCount={comments.length} />

      <CardBody>
        {comments.length > 0 ? (
          <div className='scrollbar-hide max-h-84 space-y-4 overflow-y-auto'>
            {comments.map((comment) => (
              <div
                key={comment.id}
                className={cn(
                  'border-default-200 bg-default-50 hover:bg-default-100 relative rounded-lg border p-4 transition-colors',
                  isDeletingComment && comment.id === deleteCommentId ? 'pointer-events-none opacity-50' : '',
                )}
              >
                <div className='mb-2 flex items-start justify-between'>
                  <CommentAvatarComponent name={comment?.userId} />

                  <div className='flex items-center justify-center gap-3 overflow-hidden rounded-full'>
                    <Button
                      disabled={isDeletingComment}
                      radius='full'
                      onPress={() => handleStartEditComment(comment.id)}
                      className={cn('text-default-500', editCommentId === comment.id && 'hidden')}
                      variant='light'
                      color='primary'
                      size='sm'
                      isIconOnly
                    >
                      <Edit className='h-6 w-6' />
                    </Button>

                    {editCommentId === comment.id && (
                      <div className='flex items-center gap-2'>
                        <Button
                          disabled={isUpdatingComment}
                          isDisabled={isUpdatingComment}
                          radius='full'
                          onPress={() => handleSaveEditComment(comment)}
                          className={cn(
                            'text-default-500',
                            editCommentId === comment.id ? 'text-primary-500 border-2 p-1' : '',
                          )}
                          variant='light'
                          color='primary'
                          size='sm'
                          isIconOnly
                        >
                          <Save className='h-6 w-6' />
                        </Button>

                        <Button
                          disabled={isUpdatingComment}
                          isDisabled={isUpdatingComment}
                          radius='full'
                          onPress={handleCancelEditComment}
                          className={cn(
                            'text-default-500',
                            editCommentId === comment.id ? 'text-primary-500 border-2 p-1' : '',
                          )}
                          variant='light'
                          color='primary'
                          size='sm'
                          isIconOnly
                        >
                          <X className='h-6 w-6' />
                        </Button>
                      </div>
                    )}

                    <Button
                      onPress={() => handleDeleteComment(comment.id)}
                      disabled={isDeletingComment || editCommentId === comment.id}
                      isDisabled={isDeletingComment || editCommentId === comment.id}
                      radius='full'
                      color='danger'
                      variant='light'
                      size='sm'
                      isIconOnly
                    >
                      <Trash2 className='h-6 w-6' />
                    </Button>
                  </div>
                </div>

                <p className={cn('text-default-700', editCommentId === comment.id ? 'hidden' : '')}>
                  {comment.content}
                </p>

                <Textarea
                  className={cn('w-full', editCommentId === comment.id ? '' : 'hidden')}
                  label='Edit comment'
                  defaultValue={comment.content}
                  ref={textareaRef}
                />
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
