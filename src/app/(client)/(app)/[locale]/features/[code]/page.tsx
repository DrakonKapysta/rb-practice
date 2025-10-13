import { generatePermutations } from 'flags/next'
import { setRequestLocale } from 'next-intl/server'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { rickAndMortyQueryOptions } from '@/app/(client)/entities/api'
import { HomeModule } from '@/app/(client)/modules/home'
import { charactersFlags, showCharactersBanner, showCharactersFooter } from '@/pkg/integrations/growthbook'
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
  const bannerCharacters = await showCharactersBanner(code, charactersFlags)

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(rickAndMortyQueryOptions({}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {bannerCharacters && (
        <div className='bg-secondary p-4 text-center text-2xl font-bold text-white'>Banner Characters</div>
      )}

      <HomeModule />

      {footerCharacters && (
        <footer className='bg-secondary p-4 text-center text-2xl font-bold text-white'>Footer Characters</footer>
      )}
    </HydrationBoundary>
  )
}
export default Page
