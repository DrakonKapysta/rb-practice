'use client'

import { Button, Card, CardBody } from '@heroui/react'
import { Clock4, CopyCheck, LucideArrowRight } from 'lucide-react'
import { FC } from 'react'

interface IProps {}

const AvailableTestComponent: FC<Readonly<IProps>> = () => {
  return (
    <div className='relative z-0 py-6 md:py-8'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>Доступні тести</h3>
      <p className='pt-2 text-center text-base md:text-lg'>
        Кожен тест розкриває нову частину вас. Почність з інтелекту, незбаром з&apos;являються нові тести
      </p>
      <div className='grid grid-cols-4 pt-6 md:gap-6 md:pt-8 lg:grid-cols-4 lg:grid-rows-1'>
        <Card className='border border-[#D9E7FF]'>
          <CardBody className='flex flex-col gap-3 px-4 py-6'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 38' className='h-[38px] w-[38px]'>
              <path
                stroke='#007AFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M9.167 20.022a3.4 3.4 0 0 1 1.168 2.572 3.4 3.4 0 0 1-1.168 2.571m1.726-2.398a3.4 3.4 0 0 1 2.645.992 3.4 3.4 0 0 1 .992 2.645m-2.743-11.831a2.77 2.77 0 0 1 .807-2.151 2.77 2.77 0 0 1 2.15-.807m-5.024 4.01a2.77 2.77 0 0 1 2.221-.583 2.77 2.77 0 0 1 1.901 1.29'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M.816 19.723a5.03 5.03 0 0 0 2.99 4.6 4.408 4.408 0 0 0 2.764 5.709A5.872 5.872 0 0 0 18.22 29V9a5.871 5.871 0 1 0-11.736.248 4.41 4.41 0 0 0-2.613 5.845 5.04 5.04 0 0 0-3.055 4.63'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M3.805 24.323a4.42 4.42 0 0 1 2.253-2.464m3.46 8.101a4.4 4.4 0 0 1-1.575.29 4.4 4.4 0 0 1-1.373-.218M6.484 9.246A4.4 4.4 0 0 1 7.943 9c.876 0 1.693.256 2.379.697M5.67 17.182a4.42 4.42 0 0 1-1.796-2.08'
              ></path>
              <path
                stroke='#007AFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M27.87 20.022a3.4 3.4 0 0 0-1.169 2.572c0 1.025.453 1.946 1.17 2.571m-1.727-2.398a3.4 3.4 0 0 0-2.645.992 3.4 3.4 0 0 0-.992 2.645m2.743-11.831a2.77 2.77 0 0 0-.807-2.151 2.77 2.77 0 0 0-2.151-.807m5.025 4.01a2.77 2.77 0 0 0-2.221-.583 2.77 2.77 0 0 0-1.901 1.29'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M36.22 19.723a5.03 5.03 0 0 1-2.989 4.6 4.408 4.408 0 0 1-2.764 5.709A5.872 5.872 0 0 1 18.817 29V9a5.871 5.871 0 1 1 11.736.248 4.41 4.41 0 0 1 2.613 5.845 5.04 5.04 0 0 1 3.055 4.63'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M33.231 24.323a4.42 4.42 0 0 0-2.252-2.464m-3.46 8.101c.503.193 1.037.29 1.575.29a4.4 4.4 0 0 0 1.373-.218m.086-20.786A4.4 4.4 0 0 0 29.094 9c-.876 0-1.693.256-2.379.697m4.652 7.486a4.42 4.42 0 0 0 1.796-2.08'
              ></path>
            </svg>
            <p className='text-secondary-800 text-start text-lg font-semibold'>Тест на IQ / інтелект</p>
            <div className='flex gap-4 text-sm'>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <Clock4 size={16} /> 15 хвилин
              </span>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <CopyCheck size={16} /> 25 питань
              </span>
            </div>
            <Button
              radius='sm'
              color='primary'
              className='text-medium h-12 px-8'
              endContent={<LucideArrowRight size={16} />}
            >
              Почніть тест IQ зараз
            </Button>
          </CardBody>
        </Card>
        <Card className='border border-[#D9E7FF]'>
          <CardBody className='flex flex-col gap-3 px-4 py-6'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 38' className='h-[38px] w-[38px]'>
              <g
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='22.926'
                strokeWidth='1.633'
                clipPath='url(#mind-puzzle_svg__a)'
                clipRule='evenodd'
              >
                <path
                  stroke='#2C3345'
                  d='M11.718 37.184v-5.329c0-2.677-.41-3.155-2.073-5.414a12.7 12.7 0 0 1-2.47-7.532h4.552a1.778 1.778 0 0 0 3.556 0h4.552v-4.556a1.778 1.778 0 0 0 0-3.557V6.24c6.206-.363 12.358 3.116 12.358 10.775 0 2.074 2.313 2.975 3.49 4.163.894.901.665 1.952-.237 2.478-1.072.625-2.123 1.01-1.634 2.852l-.559.984c.398.525.286 1.181-.136 1.672-.297 1.117.843 2.141-.262 3.246-.44.44-1.217.753-2.54.753-3.518 0-4.214 1.287-4.214 2.759v1.262z'
                ></path>
                <path
                  stroke='#007AFF'
                  d='M1.751 13.485c0-7.894 6.255-12.23 12.512-12.66l.148-.009v4.557a1.778 1.778 0 1 1 0 3.556v4.556H9.86a1.778 1.778 0 1 1-3.556 0z'
                ></path>
              </g>
              <defs>
                <clipPath id='mind-puzzle_svg__a'>
                  <path fill='#fff' d='M0 0h38v38H0z'></path>
                </clipPath>
              </defs>
            </svg>
            <p className='text-secondary-800 text-start text-lg font-semibold'>Тип особистості</p>
            <div className='flex gap-4 text-sm'>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <Clock4 size={16} /> 20 хвилин
              </span>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <CopyCheck size={16} /> 90 питань
              </span>
            </div>
            <Button
              radius='sm'
              color='primary'
              className='text-medium h-12 px-8'
              endContent={<LucideArrowRight size={16} />}
            >
              Тест на особистість
            </Button>
          </CardBody>
        </Card>

        <Card className='border border-[#D9E7FF]'>
          <CardBody className='flex flex-col gap-3 px-4 py-6'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 38 38' className='h-[38px] w-[38px]'>
              <g
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                clip-path='url(#relations-hands_svg__a)'
              >
                <path
                  stroke='#2C3345'
                  d='M14.974 32.671 7.982 25.68a3.83 3.83 0 0 1-1.102-2.31 3.83 3.83 0 0 0-1.1-2.312l-1.125-1.124m14.206-4.672a3.32 3.32 0 0 0-2.579-1.091 3.97 3.97 0 0 1-2.939-1.16l-.705-.704'
                ></path>
                <path
                  stroke='#2C3345'
                  d='m8.567 26.265-1.17 1.17a1.634 1.634 0 1 0 2.311 2.312l1.17-1.17m-.032.032L9.065 30.39a1.634 1.634 0 1 0 2.311 2.311l1.782-1.782M13.142 30.936l-1.766 1.766a1.634 1.634 0 1 0 2.312 2.311l1.765-1.765'
                ></path>
                <path
                  stroke='#2C3345'
                  d='m15.479 33.222-1.171 1.172a1.634 1.634 0 1 0 2.311 2.31l1.171-1.17m-2.816-2.863 4.032 4.032a1.634 1.634 0 1 0 2.31-2.31l-4.031-4.033'
                ></path>
                <path
                  stroke='#2C3345'
                  stroke-linecap='round'
                  d='m16.13 29.205 5.187 5.187a1.634 1.634 0 1 0 2.311-2.311l-5.186-5.187'
                ></path>
                <path
                  stroke='#2C3345'
                  stroke-linecap='round'
                  d='m19.596 28.049 4.032 4.032a1.634 1.634 0 1 0 2.312-2.312m0 0-4.032-4.032m4.032 4.032-5.187-5.186m5.187 5.186a1.634 1.634 0 0 0 2.311-2.311l-8.026-8.026'
                ></path>
                <path
                  stroke='#2C3345'
                  d='m28.13 27.334 1.964-1.964a3.83 3.83 0 0 0 1.101-2.31 3.83 3.83 0 0 1 1.101-2.311l.939-.94'
                ></path>
                <path
                  stroke='#2C3345'
                  stroke-linecap='round'
                  d='m25.472 11.963-.64.639a4.3 4.3 0 0 1-3.039 1.259 3.33 3.33 0 0 0-2.578 1.091l-4.021 4.044c-.732.739-.747 1.962.003 2.682.729.7 1.887.69 2.604-.027l2.35-2.35a3.23 3.23 0 0 0 2.618 1.335c1.116 0 2.1-.566 2.682-1.426'
                ></path>
                <path
                  stroke='#007AFF'
                  stroke-linecap='round'
                  d='m.816 17.9 9.62-9.621 2.89 2.89-9.62 9.62zM24.674 10.784l2.889-2.89 9.62 9.62-2.889 2.89zM19 9.625l3.345-2.607A4.24 4.24 0 0 0 23.98 3.67c0-1.608-1.329-2.922-2.935-2.852A2.8 2.8 0 0 0 19 1.84a2.8 2.8 0 0 0-2.045-1.02C15.35.75 14.02 2.063 14.02 3.671a4.25 4.25 0 0 0 1.635 3.347z'
                ></path>
              </g>
              <defs>
                <clipPath id='relations-hands_svg__a'>
                  <path fill='#fff' d='M0 0h38v38H0z'></path>
                </clipPath>
              </defs>
            </svg>
            <p className='text-secondary-800 text-start text-lg font-semibold'>Тип особистості</p>
            <div className='flex gap-4 text-sm'>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <Clock4 size={16} /> 30 хвилин
              </span>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <CopyCheck size={16} /> 120 питань
              </span>
            </div>
            <Button
              radius='sm'
              color='primary'
              className='text-medium h-12 px-8'
              endContent={<LucideArrowRight size={16} />}
            >
              Тест на стиль кохання
            </Button>
          </CardBody>
        </Card>

        <Card className='border border-[#D9E7FF]'>
          <CardBody className='flex flex-col gap-3 px-4 py-6'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 28 38' className='h-[38px] w-[38px]'>
              <path
                stroke='#007AFF'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M9.117 21.05a2.441 2.441 0 0 0 4.883 0'
              ></path>
              <path
                stroke='#007AFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M14 9.664V7.265m0 13.784v-1.702m-6.953-5.19a1.866 1.866 0 1 0 0 3.732h1.048'
              ></path>
              <path
                stroke='#007AFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M7.047 14.158a1.866 1.866 0 1 1 0-3.732h1.048m9.484-2.648a2.246 2.246 0 0 1 3.674 1.733v.939M17.58 20.537a2.246 2.246 0 0 0 3.674-1.733v-.94'
              ></path>
              <path
                stroke='#007AFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M10.42 7.778a2.246 2.246 0 0 0-3.674 1.733v.939m3.675 10.087a2.246 2.246 0 0 1-3.674-1.733v-.94'
              ></path>
              <path
                stroke='#007AFF'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M18.883 21.05a2.441 2.441 0 0 1-4.883 0'
              ></path>
              <path
                stroke='#007AFF'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M20.953 14.158a1.866 1.866 0 0 1 0 3.731h-1.048M20.953 14.158a1.866 1.866 0 1 0 0-3.732h-1.048'
              ></path>
              <path
                stroke='#007AFF'
                stroke-linejoin='round'
                stroke-miterlimit='10'
                stroke-width='1.633'
                d='M9.117 7.266a2.441 2.441 0 0 1 4.883 0M18.883 7.266a2.441 2.441 0 0 0-4.883 0'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M27.011 13.828c0-7.275-5.97-13.155-13.277-13.009C6.672.959.981 6.779.99 13.843a12.98 12.98 0 0 0 4.76 10.044 5.25 5.25 0 0 1 1.898 4.063v.61h12.706v-.623c0-1.577.708-3.067 1.923-4.07a12.98 12.98 0 0 0 4.735-10.04'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='M7.647 28.56v4.75h12.706v-4.75'
              ></path>
              <path
                stroke='#2C3345'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.633'
                d='m18.868 33.31-1.484 3.874h-6.768L9.132 33.31'
              ></path>
            </svg>
            <p className='text-secondary-800 text-start text-lg font-semibold'>Кар&apos;єра</p>
            <div className='flex gap-4 text-sm'>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <Clock4 size={16} /> 25 хвилин
              </span>
              <span className='text-secondary-500/80 flex items-center gap-2'>
                <CopyCheck size={16} /> 35 питань
              </span>
            </div>
            <Button
              radius='sm'
              color='primary'
              className='text-medium h-12 px-8'
              isDisabled
              endContent={<LucideArrowRight size={16} />}
            >
              Незабаром
            </Button>
          </CardBody>
        </Card>
      </div>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </div>
  )
}

export default AvailableTestComponent
