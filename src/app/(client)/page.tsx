import { CharactersModule } from '@/app/(client)/modules'
import { Spinner } from '@/app/(client)/shared'
import { Suspense } from 'react'

export const revalidate = 30

export default function Home() {
  return (
    <div className='min-h-screen p-8 pb-20'>
      <div className='mx-auto max-w-7xl'>
        <Suspense
          fallback={
            <div className='flex h-screen items-center justify-center'>
              <Spinner />
            </div>
          }
        >
          <CharactersModule />
        </Suspense>
      </div>
    </div>
  )
}
