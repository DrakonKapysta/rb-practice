import { generatePermutations } from 'flags/next'
import { setRequestLocale } from 'next-intl/server'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { rickAndMortyQueryOptions } from '@/app/(client)/entities/api'
import HomeModule from '@/app/(client)/modules/home/home.module'
import { charactersFlags, showCharactersFooter, showCharactersHeader } from '@/pkg/integrations/growthbook/flags'
import { getQueryClient } from '@/pkg/libraries/rest-api'

export const revalidate = 120

interface IProps extends PageProps<'/[locale]/features/[code]'> {}

export async function generateStaticParams() {
  const codes = await generatePermutations(charactersFlags)

  return codes.map((code) => ({
    code,
  }))
}

const Page: FC<Readonly<IProps>> = async (props) => {
  const { locale, code } = await props.params

  setRequestLocale(locale)

  const footerCharacters = await showCharactersFooter(code, charactersFlags)
  const headerCharacters = await showCharactersHeader(code, charactersFlags)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(rickAndMortyQueryOptions({}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {headerCharacters && <nav>header</nav>}

      <HomeModule />

      {footerCharacters && <footer>footer</footer>}
    </HydrationBoundary>
  )
}
export default Page
