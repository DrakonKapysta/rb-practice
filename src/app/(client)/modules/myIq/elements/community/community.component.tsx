'use client'

import { FC } from 'react'

import { Link } from '@heroui/react'

interface IProps {
  title: string
  description: string
  mobileDescription: string
  links: {
    icon: React.ReactNode
    href: string
  }[]
}

const CommunityComponent: FC<Readonly<IProps>> = (props) => {
  const { title, description, mobileDescription, links } = props
  return (
    <section className='text-secondary-800/70 relative z-0 flex flex-col items-center justify-between gap-3 py-6 md:flex-row md:py-10'>
      <div>
        <h3 className='text-secondary-800 text-center text-2xl leading-11 font-semibold md:text-start md:text-4xl'>
          {title}
        </h3>
        <p className='hidden text-lg lg:inline-block'>{description}</p>
        <p className='text-secondary-800 text-center text-sm lg:hidden'>{mobileDescription}</p>
      </div>
      <div className='flex w-full justify-center gap-3 md:w-fit md:justify-start'>
        {links.map((link, index) => (
          <Link
            key={link.href + index}
            className='max-h-12 rounded-xl border border-[#007AFF] bg-white px-3 shadow-md md:px-6'
            isExternal
            showAnchorIcon
            anchorIcon={link.icon}
            href={link.href}
          />
        ))}
      </div>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </section>
  )
}

export default CommunityComponent
