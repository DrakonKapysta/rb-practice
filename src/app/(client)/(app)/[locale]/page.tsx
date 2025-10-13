import { setRequestLocale } from 'next-intl/server'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { rickAndMortyQueryOptions } from '@/app/(client)/entities/api'
import { HomeModule } from '@/app/(client)/modules/home'
import { getQueryClient } from '@/pkg/libraries/rest-api'

export const revalidate = 120

interface IProps extends PageProps<'/[locale]'> {}

const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale } = await props.params

  setRequestLocale(locale)

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(rickAndMortyQueryOptions({}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeModule />
    </HydrationBoundary>
  )
}
export default Page
