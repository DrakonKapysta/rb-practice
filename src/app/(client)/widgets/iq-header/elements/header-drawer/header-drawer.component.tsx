import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { Button, cn, Divider, Drawer, DrawerBody, DrawerContent, useDisclosure } from '@heroui/react'

interface IProps {}

const HeaderDrawerComponent: FC<Readonly<IProps>> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const t = useTranslations('myIq.drawer')

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        radius='none'
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop='transparent'
        classNames={{
          wrapper: 'z-40 md:border-green-500 lg:hidden',
          base: 'pt-15 max-w-full md:max-w-sm',
        }}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerBody>
                <div className='space-y-2 pt-2'>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>{t('how_it_works')}</p>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>{t('areas_of_growth')}</p>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>{t('interesting_facts')}</p>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>{t('help_and_support')}</p>
                </div>

                <Divider className='my-3 bg-gray-200/70' />
                <div className='my-iq flex flex-col gap-4'>
                  <Button variant='ghost' radius='sm' color='primary' className='text-large h-15'>
                    {t('sign_in')}
                  </Button>
                  <Button radius='sm' color='primary' className='text-large shadow-default/50 h-15 shadow-lg/40'>
                    {t('start_test')}
                  </Button>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <div
        className='relative block overflow-hidden p-2 transition-transform lg:hidden'
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        <span
          className={cn(
            'absolute top-1/7 left-0 w-full rounded-xl border border-black duration-200',
            isOpen && 'translate-y-1.25 rotate-45',
          )}
        ></span>
        <span
          className={cn(
            'transfrom absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-xl border border-black duration-200',
            isOpen && '-left-10',
          )}
        ></span>
        <span
          className={cn(
            'absolute bottom-1/7 left-0 w-full rounded-xl border border-black duration-200',
            isOpen && '-translate-y-1.25 -rotate-45',
          )}
        ></span>
      </div>
    </>
  )
}

export default HeaderDrawerComponent
