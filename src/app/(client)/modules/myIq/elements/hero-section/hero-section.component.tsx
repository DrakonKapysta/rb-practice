'use client'

import { ArrowRight, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { Avatar, Button, Link } from '@heroui/react'

import { RarityGraphIcon } from '@/app/(client)/shared/assets/icon'

const AVATARS = [
  'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  'https://i.pravatar.cc/150?u=a04258114e29026302d',
]

const HeroSectionComponent = () => {
  const t = useTranslations('myIq.hero')

  return (
    <section className='relative z-0 flex h-full w-full flex-col gap-2'>
      <div className='-mt-8 flex flex-col-reverse items-center gap-5 lg:mt-0 lg:flex-row lg:justify-between'>
        <div className='text-secondary-500 flex w-full max-w-[630px] flex-1 flex-col gap-3 lg:gap-4'>
          <h1 className='text-[2rem] leading-10 font-extrabold lg:text-5xl lg:leading-[3.875rem]'>
            <span className='bg-gradient-to-r from-[#2C3345] to-[#424D6A] bg-clip-text text-transparent'>
              {t('title_part1')} {''}
            </span>
            <br className='hidden lg:block' />
            <span className='bg-gradient-to-r from-[#27415F] via-[#007AFF] to-[#007AFF] bg-clip-text pr-2 text-transparent'>
              {t('title_part2')}
            </span>
          </h1>
          <p className='text-base leading-6 lg:max-w-80 lg:text-lg'>{t('description')}</p>
          <div className='mt-2 flex flex-wrap gap-3 sm:flex-nowrap lg:mt-4 lg:gap-6'>
            <Button
              radius='md'
              color='primary'
              className='text-medium flex h-12 w-full items-center justify-center gap-3 px-8 lg:w-auto lg:gap-6'
            >
              {t('start_test_button')} <ArrowRight size={14} className='' />
            </Button>
            <Button
              as={Link}
              href='#how-it-works'
              variant='ghost'
              radius='md'
              color='primary'
              className='text-medium h-12 w-full px-6 lg:w-auto'
            >
              {t('how_it_works_button')}
            </Button>
          </div>

          <div className='mt-4 flex items-center gap-5 pl-1'>
            <div className='relative flex items-center gap-4 [&>*:nth-child(n+2)]:-ml-7 sm:[&>*:nth-child(n+2)]:-ml-8'>
              {AVATARS.map((avatar) => (
                <Avatar
                  key={avatar}
                  className='aspect-square h-auto w-8 ring sm:w-[2.625rem] sm:ring-2'
                  isBordered
                  color='default'
                  src={avatar}
                />
              ))}
            </div>
            <div className='-ml-2 flex flex-col text-sm sm:ml-0 sm:text-base'>
              <div className='flex flex-wrap max-md:flex-col md:items-center md:gap-1'>
                <p className='mr-1'>{t('excellent_reviews')}</p>
                <div className='flex items-center gap-1 text-yellow-500 [&>*]:h-[17px] [&>*]:w-[17px] [&>*]:fill-yellow-500'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} />
                  ))}
                </div>
              </div>
              <p>
                <span className='font-semibold'>12024 </span>
                {t('tests_completed_today')}
              </p>
            </div>
          </div>
        </div>
        <div className='relative mx-auto flex aspect-[517/296] h-full w-full max-w-[517px] flex-1 items-center justify-center'>
          <RarityGraphIcon />
        </div>
        <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-gradient-to-b from-white via-[#EBF4FF] to-white'></div>
      </div>
    </section>
  )
}

export default HeroSectionComponent
