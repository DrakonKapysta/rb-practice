'use client'

import { Link } from '@heroui/react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { FC } from 'react'

interface IProps {}

const CommunityComponent: FC<Readonly<IProps>> = () => {
  return (
    <section className='text-secondary-800/70 relative z-0 flex items-center justify-between gap-3 py-6 md:py-10'>
      <div>
        <h3 className='text-secondary-800 text-2xl leading-11 font-semibold md:text-4xl'>Спільнота</h3>
        <p className='hidden text-lg lg:inline-block'>
          Слідкуйте за нами в соціальних мережах, щоб отримувати щоденні вікторини, завдання та головоломки для
          підтримки гостроти розуму
        </p>
        <p className='text-sm lg:hidden'>Слідкуйте за нами в соціальних мережах</p>
      </div>
      <div className='flex w-full gap-3 md:w-fit'>
        <Link
          className='max-h-12 rounded-xl border border-[#007AFF] bg-white px-6 shadow-md'
          isExternal
          showAnchorIcon
          anchorIcon={<Twitter className='mx-[0.685rem] h-12 w-6' />}
          href='https://github.com/heroui-inc/heroui'
        />
        <Link
          className='max-h-12 rounded-xl border border-[#007AFF] bg-white px-6 shadow-md'
          isExternal
          showAnchorIcon
          anchorIcon={<Instagram className='mx-[0.685rem] h-12 w-6' />}
          href='https://github.com/heroui-inc/heroui'
        />
        <Link
          className='max-h-12 rounded-xl border border-[#007AFF] bg-white px-6 shadow-md'
          isExternal
          showAnchorIcon
          anchorIcon={<Linkedin className='mx-[0.685rem] h-12 w-6' />}
          href='https://github.com/heroui-inc/heroui'
        />
      </div>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </section>
  )
}

export default CommunityComponent
