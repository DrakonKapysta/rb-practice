'use client'
import { useTranslations } from 'next-intl'
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

  const tCharacter = useTranslations('character')
  const tCommon = useTranslations('common')

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
        <Input label='Name' placeholder={tCharacter('search.name_placeholder')} {...register('name')} />

        <Select {...register('status')} className='max-w-xs' label={tCharacter('search.status_label')}>
          <SelectItem key='' textValue={`${tCommon('all')} ${tCharacter('search.status_label')}`}>
            {tCommon('all')}
          </SelectItem>
          <SelectItem key='Alive' textValue={tCharacter('status.alive')}>
            {tCharacter('status.alive')}
          </SelectItem>
          <SelectItem key='Dead' textValue={tCharacter('status.dead')}>
            {tCharacter('status.dead')}
          </SelectItem>
          <SelectItem key='unknown' textValue={tCharacter('status.unknown')}>
            {tCharacter('status.unknown')}
          </SelectItem>
        </Select>

        <Input label='Species' placeholder={tCharacter('search.species_placeholder')} {...register('species')} />

        <Select {...register('gender')} className='max-w-xs' label={tCharacter('search.gender_label')}>
          <SelectItem key='' textValue={`${tCommon('all')} ${tCharacter('search.gender_label')}`}>
            {tCommon('all')}
          </SelectItem>
          <SelectItem key='Female' textValue={tCharacter('gender.female')}>
            {tCharacter('gender.female')}
          </SelectItem>
          <SelectItem key='Male' textValue={tCharacter('gender.male')}>
            {tCharacter('gender.male')}
          </SelectItem>
          <SelectItem key='Genderless' textValue={tCharacter('gender.genderless')}>
            {tCharacter('gender.genderless')}
          </SelectItem>
          <SelectItem key='unknown' textValue={tCharacter('gender.unknown')}>
            {tCharacter('gender.unknown')}
          </SelectItem>
        </Select>
      </div>

      <div className='flex gap-2'>
        <Button type='submit' color='primary'>
          {tCommon('search')}
        </Button>
        <Button type='button' color='default' variant='flat' onPress={handleClear}>
          {tCharacter('search.clear_filters')}
        </Button>
      </div>
    </form>
  )
}

export default CharacterSearchComponent
