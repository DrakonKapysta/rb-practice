import { MyIqModule } from '@/app/(client)/modules/myIq'
import { setRequestLocale } from 'next-intl/server'
import { FC, use } from 'react'

interface IProps extends PageProps<'/[locale]/my-iq'> {}

const Page: FC<Readonly<IProps>> = (props) => {
  const { locale } = use(props.params)

  setRequestLocale(locale)

  return (
    <main className='mx-auto w-full max-w-7xl px-4 pt-16 md:px-6'>
      <MyIqModule />
    </main>
  )
}

export default Page
