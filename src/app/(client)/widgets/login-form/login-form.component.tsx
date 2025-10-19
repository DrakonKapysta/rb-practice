'use client'

import { useTranslations } from 'next-intl'
import { FC, useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { addToast, Button, Card, CardBody, CardHeader } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { EmailInput, PasswordInput } from '@/client/shared/ui'
import { login } from '@/client/entities/api/auth'

import { LoginFormSchema, LoginFormSchemaType } from './login-form.interface'

interface IProps {}

const LoginFormComponent: FC<Readonly<IProps>> = () => {
  const tLogin = useTranslations('auth.login')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginFormSchemaType) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)

    startTransition(async () => {
      const res = await login(formData)
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
        <h2 className='w-full text-2xl font-bold'>{tLogin('title')}</h2>

        <p className='text-default-500'>{tLogin('subtitle')}</p>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <EmailInput {...register('email')} error={errors.email?.message} placeholder={tLogin('email_placeholder')} />

          <PasswordInput
            {...register('password')}
            error={errors.password?.message}
            placeholder={tLogin('password_placeholder')}
          />

          <Button variant='solid' color='primary' type='submit' isLoading={isPending}>
            {tLogin('button')}
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default LoginFormComponent
