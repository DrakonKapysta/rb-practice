'use client'

import { Trash2 } from 'lucide-react'
import { useState } from 'react'

import { Button, Textarea } from '@heroui/react'

import { createClient } from '@/pkg/integrations/supabase/auth/client'

interface ICharacterCommentsProps {
  characterId: number
}

interface IComment {
  id: number
  content: string
  userId: string
  createdAt: Date
  user: {
    id: string
  }
}

export const CharacterComments = ({ characterId }: ICharacterCommentsProps) => {
  const supabase = createClient()

  const [comments, setComments] = useState<IComment[]>([])

  const [currentUser, setCurrentUser] = useState<string | null>(null)

  return (
    <div className='space-y-6'>
      <h2 className='text-2xl font-bold'>Comments</h2>

      {/* Comment Form - Only show if user is logged in */}
      {currentUser ? (
        <form className='space-y-4'>
          <Textarea placeholder='Share your thoughts about this character...' minRows={3} maxLength={1000} />

          <Button type='submit' color='primary'>
            Post Comment
          </Button>
        </form>
      ) : (
        <div className='rounded-lg border border-gray-300 p-4 dark:border-gray-700'>
          <p className='text-gray-600 dark:text-gray-400'>Please log in to leave a comment</p>
        </div>
      )}

      {/* Comments List */}
      <div className='space-y-4'>
        {comments.length === 0 ? (
          <p className='text-gray-500'>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className='rounded-lg border border-gray-200 p-4 dark:border-gray-700'>
              <div className='mb-2 flex items-start justify-between'>
                <div className='flex-1'>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {new Date(comment.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>

                {currentUser === comment.userId && (
                  <Button isIconOnly size='sm' variant='light' color='danger'>
                    <Trash2 className='h-4 w-4' />
                  </Button>
                )}
              </div>

              <p className='whitespace-pre-wrap text-gray-800 dark:text-gray-200'>{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
