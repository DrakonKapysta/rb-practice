'use client'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { addToast, Button, Card, CardBody, CardHeader } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { EmailInput, PasswordInput } from '@/app/(client)/shared/ui'
import { signup } from '@/pkg/integrations/supabase'

import { RegisterFormSchema, RegisterFormSchemaType } from './register-form.interface'

const RegisterFormComponent = () => {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchemaType>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const onSubmit = async (data: RegisterFormSchemaType) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)

    startTransition(async () => {
      const res = await signup(formData)
      if (res?.error) {
        addToast({
          title: 'Error',
          description: res.error.message,
          color: 'danger',
        })
      }
    })
  }
  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='flex flex-col gap-2 text-center'>
        <h2 className='text-2xl font-bold'>Create Account</h2>

        <p className='text-default-500'>Sign up for a new account</p>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <EmailInput {...register('email')} error={errors.email?.message} />

          <PasswordInput {...register('password')} error={errors.password?.message} />

          <PasswordInput {...register('confirmPassword')} error={errors.confirmPassword?.message} />

          <Button type='submit' isLoading={isPending} disabled={isPending}>
            Register
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default RegisterFormComponent
