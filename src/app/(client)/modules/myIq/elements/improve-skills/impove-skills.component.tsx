import { Check } from 'lucide-react'
import { FC } from 'react'

import { Card, CardBody } from '@/app/(client)/shared/ui'
import { useMessages, useTranslations } from 'next-intl'

interface IProps {}

const ImproveSkillsComponent: FC<Readonly<IProps>> = () => {
  const t = useTranslations('myIq.improveSkills')

  const messages = useMessages()

  const itemKeys = Object.keys(messages.myIq.improveSkills.improve_skills_items)

  return (
    <div className='py-6 md:py-10'>
      <h3 className='text-secondary-800/90 text-center text-2xl font-semibold md:text-4xl'>
        {t('improve_skills_title')}
      </h3>

      <p className='pt-2 text-center text-base md:text-lg'>{t('improve_skills_description')}</p>

      <div className='flex flex-col gap-3 pt-5 md:gap-6 md:pt-8 lg:flex-row'>
        {itemKeys.map((key, index) => {
          const subitemKeys = Object.keys(messages.myIq.improveSkills.improve_skills_items[key].subitems)

          return (
            <Card key={key} className='flex-1 border border-[#D9E7FF]'>
              <CardBody className='text-secondary-800 flex flex-col gap-3 px-4 py-6'>
                <div className='flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-r from-[#007AFF] to-[#7CB7F8] p-[3px]'>
                  <div className='text-secondary-800 flex h-full w-full items-center justify-center rounded-full bg-white text-xl font-semibold'>
                    {index + 1}
                  </div>
                </div>

                <p className='text-lg font-semibold'>{t(`improve_skills_items.${key}.title`)}</p>

                <ul className='flex flex-col gap-2'>
                  {subitemKeys.map((subItemKey, subIndex) => (
                    <li key={subIndex} className='relative pl-6'>
                      <p className='text-sm'>{t(`improve_skills_items.${key}.subitems.${subItemKey}`)}</p>

                      <div className='text-secondary-500/80 absolute top-0 left-0 text-sm'>
                        <Check color='#007AFF' size={18} />
                      </div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ImproveSkillsComponent
