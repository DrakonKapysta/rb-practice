import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@heroui/react'
import { Check } from 'lucide-react'
import { FC } from 'react'

interface IProps {}

const PlanComponent: FC<Readonly<IProps>> = () => {
  return (
    <section className='text-secondary-800 py-6 md:py-10'>
      <h3 className='text-center text-2xl font-semibold md:text-4xl'>Ознайомтеся з нашими планами</h3>
      <p className='pt-2 text-center text-base md:text-lg'>
        Ознайомтеся з нашими гнучкими пропозиціями та оберіть ту, яка найкраще відповідає вашому навчальному та
        особистісному розвитку.
      </p>
      <div className='flex items-center justify-center gap-3 pt-5 max-lg:flex-col md:gap-6 md:pt-8'>
        <div className='flex gap-4'>
          <Card className='text-secondary-800 border-default-200 max-w-[362px] border p-3 shadow-xl'>
            <CardHeader>
              <h4 className='text-lg font-semibold'>ДВО ТИЖНЕВА ПІДПИСКА</h4>
            </CardHeader>
            <Divider className='bg-black' />
            <CardBody>
              <div className='flex flex-col gap-8'>
                <p>
                  <span className='inline text-4xl leading-7 font-semibold tracking-tight'>₴724.99*</span>
                  <span className='text-default-400 text-small font-medium'>/2 тижні</span>
                </p>
                <ul className='text-default-500 flex flex-col gap-2'>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>
                      7-денна пробна версія, потім автоматично поновлюється до двотижневого плану
                    </p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>Персоналізований сертифікат IQ</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>Комплексний когнітивний аналіз</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>Повний доступ до інструментів розробки</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                </ul>
              </div>
            </CardBody>
            <CardFooter>
              <Button radius='sm' color='primary' className='text-medium h-[2.625rem] w-full px-8'>
                Почати
              </Button>
            </CardFooter>
          </Card>
          <Card className='text-secondary-800 border-default-200 max-w-[362px] border p-3 shadow-xl'>
            <CardHeader>
              <h4 className='text-lg font-semibold'>ЩОМІСЯЧНА ПІДПИСКА</h4>
            </CardHeader>
            <Divider className='bg-black' />
            <CardBody>
              <div className='flex flex-col gap-8'>
                <p>
                  <span className='inline text-4xl leading-7 font-semibold tracking-tight'>₴1448.99*</span>
                  <span className='text-default-400 text-small font-medium'>місяць</span>
                </p>
                <ul className='text-default-500 flex flex-col gap-2'>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>Максимальна економія на довгостроковому зростанні</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>Повний набір для когнітивної оцінки</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>20+ годин курсів під керівництвом експертів</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                  <li className='relative pl-8 text-lg font-semibold'>
                    <p className='text-base'>Персоналізований шлях розвитку</p>
                    <div className='text-secondary-500/80 absolute top-1/2 left-0 -translate-y-1/2 transform text-sm'>
                      <Check color='#007AFF' size={24} strokeWidth={2.5} />
                    </div>
                  </li>
                </ul>
              </div>
            </CardBody>
            <CardFooter>
              <Button radius='sm' color='primary' className='text-medium h-[2.625rem] w-full px-8'>
                Почати
              </Button>
            </CardFooter>
          </Card>
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
