import { Button, Divider, Drawer, DrawerBody, DrawerContent, DrawerProps, useDisclosure } from '@heroui/react'
import { FC } from 'react'

interface IProps extends Omit<DrawerProps, 'children'> {}

const HeaderDrawerComponent: FC<Readonly<IProps>> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          {(onClose) => (
            <>
              <DrawerBody>
                <div className='space-y-2 pt-2'>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>Як це працює</p>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>Сфери зростання</p>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>Цікаві факти</p>
                  <p className='py-2 text-base leading-7 text-gray-500 hover:bg-gray-50'>Довідка та підтримка</p>
                </div>

                <Divider className='my-3 bg-gray-200/70' />
                <div className='my-iq flex flex-col gap-4'>
                  <Button variant='ghost' radius='sm' color='primary' className='text-large h-15'>
                    Увійти
                  </Button>
                  <Button radius='sm' color='primary' className='text-large shadow-default/50 h-15 shadow-lg/40'>
                    Розпочати тест
                  </Button>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>

      <div className='relative block p-2 lg:hidden' onClick={() => (isOpen ? onClose() : onOpen())}>
        <span className='absolute top-1/7 left-0 w-full rounded-xl border border-black'></span>
        <span className='transfrom absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-xl border border-black'></span>
        <span className='absolute bottom-1/7 left-0 w-full rounded-xl border border-black'></span>
      </div>
    </>
  )
}

export default HeaderDrawerComponent
