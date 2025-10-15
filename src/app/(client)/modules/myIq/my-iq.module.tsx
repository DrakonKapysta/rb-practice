import { FC } from 'react'
import {
  AvailableTestComponent,
  BenefitsComponent,
  CommunityComponent,
  FaqComponent,
  HowItWorksComponent,
  ImproveSkillsComponent,
  LatestResultsComponent,
  PlanComponent,
} from './elements'
import { AVAILABLE_TESTS, BENEFITS, COMMUNITY_LINKS, HOW_IT_WORKS, IMPROVE_SKILLS, PLAN_ITEMS } from './my-iq.constants'

interface IProps {}

const MyIqModule: FC<Readonly<IProps>> = () => {
  return (
    <section className='my-iq relative z-0 flex h-full w-full flex-col gap-2 pt-14 lg:pt-18'>
      <HowItWorksComponent title='Як це працює' items={HOW_IT_WORKS} />

      <AvailableTestComponent
        title='Доступні тести'
        description=" Кожен тест розкриває нову частину вас. Почність з інтелекту, незбаром з'являються нові тести"
        items={AVAILABLE_TESTS}
      />

      <ImproveSkillsComponent
        title='Розвивайте свої здібності'
        description='Розкрийте свій потенціал з нашим комплексним навчальним пакетом'
        items={IMPROVE_SKILLS}
      />

      <BenefitsComponent title='Що ви отримаєте' items={BENEFITS} />

      <CommunityComponent
        title='Спільнота'
        description='Слідкуйте за нами в соціальних мережах, щоб отримувати щоденні вікторини, завдання та головоломки для підтримки гостроти розуму'
        mobileDescription='Слідкуйте за нами в соціальних мережах'
        links={COMMUNITY_LINKS}
      />

      <PlanComponent
        title='Ознайомтеся з нашими планами'
        description='Ознайомтеся з нашими гнучкими пропозиціями та оберіть ту, яка найкраще відповідає вашому навчальному та особистісному розвитку.'
        items={PLAN_ITEMS}
      />

      <FaqComponent />

      <LatestResultsComponent />
    </section>
  )
}

export default MyIqModule
