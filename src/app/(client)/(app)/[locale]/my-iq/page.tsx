'use client'
import { MyIqModule } from '@/app/(client)/modules/myIq'
import { IqHeroSectionComponent } from '@/app/(client)/widgets'

const Page = () => {
  return (
    <main className='mx-auto w-full max-w-7xl px-4 pt-16 md:px-6'>
      <IqHeroSectionComponent />
      <MyIqModule />
    </main>
  )
}

export default Page
