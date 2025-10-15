import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@heroui/react'
import { Check } from 'lucide-react'
import { FC } from 'react'

interface IProps {
  title: string
  description: string
  items: {
    title: string
    price: string
    period: string
    benefits: string[]
  }[]
}

const PlanComponent: FC<Readonly<IProps>> = (props) => {
  const { title, description, items } = props

  return (
    <section className='text-secondary-800 py-6 md:py-10'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>{title}</h3>
      <p className='pt-2 text-center text-base md:text-lg'>{description}</p>
      <div className='flex items-center justify-center gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        <div className='flex flex-col gap-4 sm:flex-row'>
          {items.map((item, index) => (
            <Card
              key={index + item.title}
              className='text-secondary-800 border-default-200 max-w-[362px] flex-1 border p-3 shadow-xl'
            >
              <CardHeader className='pb-6'>
                <h4 className='text-lg font-semibold'>{item.title}</h4>
              </CardHeader>
              <Divider className='bg-black' />
              <CardBody>
                <div className='flex flex-col gap-8'>
                  <p>
                    <span className='inline text-4xl leading-7 font-semibold tracking-tight'>{item.price}*</span>
                    <span className='text-default-400 text-small font-medium'>/{item.period}</span>
                  </p>
                  <ul className='text-default-500 flex flex-col gap-2'>
                    {item.benefits.map((benefit, index) => (
                      <li key={index + benefit} className='relative pl-8 text-lg font-semibold'>
                        <p className='text-base'>{benefit}</p>
                        <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                          <Check color='#007AFF' size={24} strokeWidth={2.5} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardBody>
              <CardFooter>
                <Button radius='sm' color='primary' className='text-medium h-[2.625rem] w-full px-8'>
                  Почати
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <p className='mt-4 text-center text-[15px] leading-5'>
        *Відвідайте нашу <Link className='text-primary-900 underline'>сторінку з цінами</Link>, щоб дізнатися більше
        деталей.
      </p>
    </section>
  )
}

export default PlanComponent
