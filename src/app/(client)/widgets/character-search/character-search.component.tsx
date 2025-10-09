'use client'
import * as qs from 'qs-esm'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input, Select, SelectItem } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { useQueryParams } from '@/app/(client)/shared/hooks'

import { CharacterSearchSchema, ICharacterSearch } from './character-search.interface'
import { CharacterSearchService } from './character-search.service'

interface IProps {}

const CharacterSearchComponent: FC<Readonly<IProps>> = () => {
  const { searchParams, changeQuery, push } = useQueryParams()

  const filters = qs.parse(searchParams.toString()) as ICharacterSearch

  const { register, handleSubmit, reset } = useForm<ICharacterSearch>({
    defaultValues: {
      name: filters?.name || '',
      status: filters?.status || '',
      species: filters?.species || '',
      gender: filters?.gender || '',
    },
    resolver: zodResolver(CharacterSearchSchema),
  })

  const onSubmit = async (data: ICharacterSearch) => {
    const queryParams = CharacterSearchService.transformFilters(data)

    changeQuery(queryParams)
  }

  const handleClear = () => {
    reset()
    push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Input label='Name' placeholder='Enter character name...' {...register('name')} />

        <Select {...register('status')} className='max-w-xs' label='Select Status'>
          <SelectItem key=''>All Status</SelectItem>
          <SelectItem key='Alive'>Alive</SelectItem>
          <SelectItem key='Dead'>Dead</SelectItem>
          <SelectItem key='unknown'>Unknown</SelectItem>
        </Select>

        <Input label='Species' placeholder='Enter species...' {...register('species')} />

        <Select {...register('gender')} className='max-w-xs' label='Select Gender'>
          <SelectItem key=''>All Gender</SelectItem>
          <SelectItem key='Female'>Female</SelectItem>
          <SelectItem key='Male'>Male</SelectItem>
          <SelectItem key='Genderless'>Genderless</SelectItem>
          <SelectItem key='unknown'>Unknown</SelectItem>
        </Select>
      </div>

      <div className='flex gap-2'>
        <Button type='submit' color='primary'>
          Search
        </Button>
        <Button type='button' color='default' variant='flat' onPress={handleClear}>
          Clear Filters
        </Button>
      </div>
    </form>
  )
}

export default CharacterSearchComponent
