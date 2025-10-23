import { notFound } from 'next/navigation'
import { FC, Suspense } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { characterByIdQueryOptions, getCharacters } from '@/app/(client)/entities/api'
import { CharacterDetailComponent } from '@/app/(client)/widgets/character-detail'
import { getQueryClient } from '@/pkg/libraries/rest-api'
import { cacheLife } from 'next/cache'

import { Spinner } from '@/app/(client)/shared/ui'

interface IProps extends PageProps<'/[locale]/character/[slug]'> {}

export async function generateStaticParams() {
  const characters = await getCharacters()
  const res = characters.results.map((character) => ({
    slug: character.id.toString(),
  }))
  return res
}

const CharacterPage: FC<Readonly<IProps>> = async (props) => {
  'use cache'
  cacheLife('minutes')

  const characterId = parseInt((await props.params).slug)

  const queryClient = getQueryClient()

  if (isNaN(characterId) || characterId <= 0) {
    notFound()
  }

  await queryClient.prefetchQuery(characterByIdQueryOptions(characterId))

  return (
    <div className='min-h-screen p-8 pb-20'>
      <div className='mx-auto max-w-7xl'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<Spinner />}>
            <CharacterDetailComponent characterId={characterId} />
          </Suspense>
        </HydrationBoundary>
      </div>
    </div>
  )
}

export default CharacterPage
