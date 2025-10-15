'use client'
import { Link } from '@/pkg/libraries/locale'
import { Accordion, AccordionItem } from '@heroui/react'
import type { FC } from 'react'

interface IProps {}

const FAQ_ITEMS = {
  title: 'Часті запитання',
  items: [
    {
      title: 'Що робити, якщо я не задоволений програмою?',
      description: `Ми впевнені, що ви побачите цінність і переваги myIQ, але якщо ви не задоволені або у вас виникли технічні проблеми, ви можете мати право на повернення коштів. Ознайомтеся з нашою ${(
        <Link className='underline' href='/'>
          Політикою повернення коштів
        </Link>
      )}, щоб дізнатися більше.`,
    },
    {
      title: 'Як мені скасувати підписку?',
      description: `Скасування є простим і займає менше кількох хвилин. Відвідайте наш ${(
        <Link className='underline' href='/'>
          Центр допомоги
        </Link>
      )}, та дотримуйтесь інструкцій. Ви збережете доступ до кінця поточного розрахункового періоду.`,
    },
    {
      title: 'Скільки часу триває тест на IQ?',
      description: `Наш IQ тест займає до 20 хвилин. Кожен тест повинен бути завершений за один раз і не може бути призупинений, оскільки це забезпечує найточніші результати. Будь ласка, заплануйте час без перерв перед початком будь-якого тесту.`,
    },
    {
      title: 'Чи можу я перескласти тести?',
      description: `Так! Ви можете повторно проходити тестування після завершення рекомендованих навчальних модулів, щоб відстежувати свій прогрес та покращення з часом.`,
    },
    {
      title: 'Чи можу я отримати доступ до myIQ на кількох пристроях?',
      description: `Так! Ваша підписка працює на всіх пристроях - смартфонах, планшетах та комп'ютерах. Ваш прогрес автоматично синхронізується скрізь, де ви входите в систему.`,
    },
    {
      title: 'Чи мої дані захищені?',
      description: `Ми серійно ставимося до вашої конфіденції. Ваші дані зберігаються безпечно та відповідно до всіх чинних законів. Дані шифруються з використанням банківського рівня безпеки, і ми ніколи не передаємо вашу особисту інформацію третім сторонам. Ваша платіжна інформація обробляється відповідно до галузевих стандартів PCI-DSS. Ви можете дізнатися більше в нашій ${(
        <Link className='underline' href='/'>
          Політиці конфіденційності
        </Link>
      )}.`,
    },
  ],
}

const FaqComponent: FC<Readonly<IProps>> = () => {
  return (
    <div className='relative z-0 flex flex-col gap-6 py-6 md:py-10 lg:flex-row lg:gap-14'>
      <h2 className='text-secondary-800 text-center text-2xl leading-8 font-semibold md:text-4xl md:leading-12 lg:text-start'>
        {FAQ_ITEMS.title}
      </h2>
      <Accordion selectionMode='multiple'>
        {FAQ_ITEMS.items.map((item, index) => (
          <AccordionItem
            key={index + item.title}
            aria-label={item.title}
            title={item.title}
            classNames={{
              title: 'text-secondary-800 text-base md:text-lg font-medium',
              indicator: 'text-secondary-800 text-lg',
            }}
          >
            <span className='text-default-600'>{item.description}</span>
          </AccordionItem>
        ))}
      </Accordion>
      <div className='absolute top-0 -left-1/2 z-[-1] h-full w-[200vw] bg-[#F6FBFF]'></div>
    </div>
  )
}

export default FaqComponent
