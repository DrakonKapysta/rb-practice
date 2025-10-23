import { generatePermutations } from 'flags/next'
import { setRequestLocale } from 'next-intl/server'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { charactersQueryOptions } from '@/app/(client)/entities/api'
import { HomeBannerModule } from '@/app/(client)/modules/experiments/home-banner'
import { charactersFlags, showCharactersBanner, showCharactersFooter } from '@/pkg/integrations/growthbook'
import { FeatureStoreProvider } from '@/pkg/libraries/feature'
import { getQueryClient } from '@/pkg/libraries/rest-api'
import { cacheLife } from 'next/cache'

interface IProps extends PageProps<'/[locale]/features/[code]'> {}

export async function generateStaticParams() {
  const codes = await generatePermutations(charactersFlags)

  return codes.map((code) => ({
    code,
  }))
}

const Page: FC<Readonly<IProps>> = async (props) => {
  'use cache'
  cacheLife('minutes')

  const { locale, code } = await props.params

  setRequestLocale(locale)

  const [footerCharacters, bannerCharacters] = await Promise.all([
    showCharactersFooter(code, charactersFlags),
    showCharactersBanner(code, charactersFlags),
  ])

  const initialFeatures = {
    showCharactersFooter: footerCharacters,
    showCharactersBanner: bannerCharacters,
  }

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(charactersQueryOptions({}))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FeatureStoreProvider initialFeatures={initialFeatures}>
        <HomeBannerModule />

        {footerCharacters && (
          <footer className='bg-secondary p-4 text-center text-2xl font-bold text-white'>Footer Characters</footer>
        )}
      </FeatureStoreProvider>
    </HydrationBoundary>
  )
}
export default Page
