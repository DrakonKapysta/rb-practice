import { FC } from 'react'

import {
  AvailableTestComponent,
  BenefitsComponent,
  CommunityComponent,
  FaqComponent,
  HeroSectionComponent,
  HowItWorksComponent,
  ImproveSkillsComponent,
  LatestResultsComponent,
  PlanComponent,
} from './elements'

interface IProps {}

const MyIqModule: FC<Readonly<IProps>> = () => {
  return (
    <section className='my-iq relative z-0 flex h-full w-full flex-col gap-2 pt-14 lg:pt-18'>
      <HeroSectionComponent />

      <HowItWorksComponent />

      <AvailableTestComponent />

      <ImproveSkillsComponent />

      <BenefitsComponent />

      <CommunityComponent />

      <PlanComponent />

      <FaqComponent />

      <LatestResultsComponent />
    </section>
  )
}

export default MyIqModule
