import z from 'zod'

export const LoginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
})

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>
