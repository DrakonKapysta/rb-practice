import { type FC, Suspense } from 'react'

import { Card, CardBody, CardHeader } from '@/app/(client)/shared/ui'

import { CharacterListComponent } from '@/app/(client)/widgets/character-list'
import { CharacterSearchComponent } from '@/app/(client)/widgets/character-search'

import { Spinner } from '@/app/(client)/shared/ui'

import { getTranslations } from 'next-intl/server'

interface IProps {}

const HomeModule: FC<Readonly<IProps>> = async () => {
  const t = await getTranslations('home')

  return (
    <div className='mx-auto flex min-h-screen flex-col pb-12'>
      <div className='space-y-6'>
        <Card>
          <CardHeader>
            <h2 className='text-secondary-800 mt-10 text-2xl font-bold'>{t('title')}</h2>
          </CardHeader>

          <CardBody>
            <div className='flex items-end gap-4'>
              <Suspense fallback={<Spinner />}>
                <CharacterSearchComponent />
              </Suspense>
            </div>
          </CardBody>
        </Card>

        <Suspense fallback={<Spinner className='h-[calc(100svh-15rem)]' />}>
          <CharacterListComponent />
        </Suspense>
      </div>
    </div>
  )
}

export default HomeModule
