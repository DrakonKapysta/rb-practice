'use client'
import { useTranslations } from 'next-intl'
import { type FC, Suspense } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { CharacterSearchComponent } from '@/app/(client)/widgets/character-search'
import { CharacterListBannerComponent } from '@/app/(client)/widgets/experiments'

interface IProps {}

const HomeBannerModule: FC<Readonly<IProps>> = () => {
  const t = useTranslations('home')

  return (
    <div className='mx-auto min-h-screen pb-12'>
      <div className='space-y-6'>
        <Card>
          <CardHeader>
            <h2 className='text-2xl font-bold'>{t('title')}</h2>
          </CardHeader>

          <CardBody>
            <div className='flex items-end gap-4'>
              <Suspense>
                <CharacterSearchComponent />
              </Suspense>
            </div>
          </CardBody>
        </Card>

        <Suspense>
          <CharacterListBannerComponent />
        </Suspense>
      </div>
    </div>
  )
}

export default HomeBannerModule
