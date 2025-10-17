'use client'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { addToast, Button, Card, CardBody, CardHeader } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { EmailInput, PasswordInput } from '@/app/(client)/shared/ui'
import { signup } from '@/pkg/integrations/supabase'

import { RegisterFormSchema, RegisterFormSchemaType } from './register-form.interface'

const RegisterFormComponent = () => {
  const tRegister = useTranslations('auth.register')
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
        <h2 className='text-2xl font-bold'>{tRegister('title')}</h2>

        <p className='text-default-500'>{tRegister('subtitle')}</p>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          <EmailInput
            {...register('email')}
            error={errors.email?.message}
            placeholder={tRegister('email_placeholder')}
          />

          <PasswordInput
            {...register('password')}
            error={errors.password?.message}
            placeholder={tRegister('password_placeholder')}
          />

          <PasswordInput
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            placeholder={tRegister('confirm_password_placeholder')}
          />

          <Button variant='solid' color='primary' type='submit' isLoading={isPending} disabled={isPending}>
            {tRegister('button')}
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}

export default RegisterFormComponent
