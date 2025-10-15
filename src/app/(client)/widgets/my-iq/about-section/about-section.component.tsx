'use client'

import { Button, Card, CardBody, CardHeader } from '@heroui/react'

import { Check, Clock4, CopyCheck, LucideArrowRight } from 'lucide-react'

import {
  HowItWorksComponent,
  AvailableTestComponent,
  ImproveSkillsComponent,
  BenefitsComponent,
  CommunityComponent,
  PlanComponent,
} from './elements'

const AboutSectionComponent = () => {
  return (
    <section className='my-iq relative z-0 flex h-full w-full flex-col gap-2 pt-14 lg:pt-18'>
      {/* how it works */}
      <HowItWorksComponent />

      {/* Available tests */}
      <AvailableTestComponent />

      {/* Improve your skills */}

      <ImproveSkillsComponent />

      {/* What you receive */}

      <BenefitsComponent />

      {/* Community */}

      <CommunityComponent />

      {/* Plan */}

      <PlanComponent />
    </section>
  )
}

export default AboutSectionComponent
