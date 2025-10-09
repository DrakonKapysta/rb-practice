import { notFound } from 'next/navigation'
import { FC } from 'react'

import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

import { rickAndMortyByIdQueryOptions, RickAndMortyQueryApi } from '@/app/(client)/entities/api'
import { CharacterDetailComponent } from '@/app/(client)/widgets'
import { getQueryClient } from '@/pkg/libraries/rest-api'

interface IProps extends PageProps<'/[locale]/character/[slug]'> {}

export const revalidate = 30

export async function generateStaticParams() {
  const characters = await RickAndMortyQueryApi.getCharacters()
  return characters.results.map((character) => ({
    slug: character.id.toString(),
  }))
}

const CharacterPage: FC<Readonly<IProps>> = async (props) => {
  const characterId = parseInt((await props.params).slug)

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(rickAndMortyByIdQueryOptions(characterId))

  if (isNaN(characterId) || characterId <= 0) {
    notFound()
  }

  return (
    <div className='min-h-screen p-8 pb-20'>
      <div className='mx-auto max-w-7xl'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CharacterDetailComponent characterId={characterId} />
        </HydrationBoundary>
      </div>
    </div>
  )
}

export default CharacterPage
