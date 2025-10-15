import { AboutSectionComponent } from '@/app/(client)/widgets/my-iq/about-section'
import { HeroSectionComponent } from '@/app/(client)/widgets/my-iq/hero-section'

const Page = () => {
  return (
    <main className='mx-auto w-full max-w-7xl px-4 pt-16 md:px-6'>
      <HeroSectionComponent />

      <AboutSectionComponent />
    </main>
  )
}

export default Page
