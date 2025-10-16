'use client'
import { useMutation } from '@tanstack/react-query'
import { CreateCommentMutationOptions } from '@/app/(client)/entities/api/comments/comment.mutation'

const Page = () => {
  const { mutate: createComment } = useMutation(
    CreateCommentMutationOptions({
      content: 'Test',
      characterId: 1,
    }),
  )

  return (
    <div className='mt-30'>
      <button onClick={() => createComment()}>Create Comment</button>
    </div>
  )
}

export default Page
