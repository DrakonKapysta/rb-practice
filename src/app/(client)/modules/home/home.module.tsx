'use client'
import { type FC, Suspense } from 'react'

import { Card, CardBody, CardHeader } from '@heroui/react'

import { CharacterListComponent, CharacterSearchComponent } from '@/app/(client)/widgets'

interface IProps {}

const HomeModule: FC<Readonly<IProps>> = () => {
  return (
    <div className='min-h-screen pb-12'>
      <div className='space-y-6'>
        <Card>
          <CardHeader>
            <h2 className='text-2xl font-bold'>Rick and Morty Characters</h2>
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
          <CharacterListComponent />
        </Suspense>
      </div>
    </div>
  )
}

export default HomeModule
