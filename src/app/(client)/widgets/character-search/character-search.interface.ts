import z from 'zod'

export const CharacterSearchSchema = z.object({
  name: z.string().optional(),
  status: z.enum(['Alive', 'Dead', 'unknown', '']).optional(),
  species: z.string().optional(),
  gender: z.enum(['Female', 'Male', 'Genderless', 'unknown', '']).optional(),
})

export type ICharacterSearch = z.infer<typeof CharacterSearchSchema>
