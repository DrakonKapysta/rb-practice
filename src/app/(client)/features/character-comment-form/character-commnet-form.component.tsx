'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { addToast, Button, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { createCommentMutationOptions } from '@/app/(client)/entities/api'

import { CreateCommentFormSchema, ICreateCommentForm } from './character-commnet-form.interface'

interface IProps {
  characterId: number
}

const CharacterCommentFormComponent: FC<Readonly<IProps>> = ({ characterId }) => {
  const { mutateAsync: createComment, isPending, error } = useMutation(createCommentMutationOptions())

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isLoading, errors },
  } = useForm<ICreateCommentForm>({
    defaultValues: {
      content: '',

      characterId,
    },

    resolver: zodResolver(CreateCommentFormSchema),
  })

  const onSubmit = async (data: ICreateCommentForm) => {
    await createComment(data)

    if (error) {
      return addToast({
        title: 'Error',
        description: 'An error occurred while creating the comment',
        color: 'danger',
      })
    }

    addToast({
      title: 'Success',
      description: 'Comment created successfully',
      color: 'success',
    })
    reset()
  }

  const isCommentSending = isSubmitting || isLoading || isPending

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='border-default-200 flex flex-col gap-4 rounded-xl border p-4 shadow-md'
    >
      <Input label='Content' placeholder='Enter your comment' {...register('content')} />

      {errors.content && <p className='text-red-500'>{errors.content.message}</p>}

      <div className='flex gap-2'>
        <Button color='primary' type='submit' isLoading={isCommentSending} isDisabled={isCommentSending}>
          Submit
        </Button>

        <Button
          color='primary'
          variant='bordered'
          type='reset'
          onPress={() => reset()}
          isLoading={isCommentSending}
          isDisabled={isCommentSending}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}
export default CharacterCommentFormComponent
