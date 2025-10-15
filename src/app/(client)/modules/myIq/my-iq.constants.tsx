import { Check, Instagram, Linkedin, Twitter } from 'lucide-react'

import { BrainIcon, BrainLampIcon, MindPuzzleIcon, RelationsHandsIcon } from '@/app/(client)/shared/assets/icon'

export const AVAILABLE_TESTS = [
  {
    icon: <BrainIcon />,
    title: 'Тест на IQ / інтелект',
    buttonTitle: 'Почніть тест IQ зараз',
    time: '15 хвилин',
    questions: '25 питань',
  },
  {
    icon: <MindPuzzleIcon />,
    title: 'Тип особистості',
    buttonTitle: 'Тест на особистість',
    time: '15 хвилин',
    questions: '25 питань',
  },
  {
    icon: <RelationsHandsIcon />,
    title: 'Стиль кохання',
    buttonTitle: 'Тест на стиль кохання',
    time: '15 хвилин',
    questions: '25 питань',
  },
  {
    icon: <BrainLampIcon />,
    title: "Кар'єра",
    buttonTitle: 'Незабаром',
    time: '15 хвилин',
    questions: '25 питань',
  },
]

export const IMPROVE_SKILLS = [
  {
    title: 'Експертні відеокурси',
    subItems: [
      { description: '20+ годин експертного навчання' },
      { description: 'Легкі для сприйняття уроки' },
      { description: 'Навчайтеся у власному темпі' },
      { description: 'Відстежуйте свій прогрес' },
    ],
    icon: <Check className='mx-[0.685rem] h-12 w-6' />,
  },
  {
    title: 'Ігри для тренування мозку',
    subItems: [
      { description: 'Різноманітні вправи для тренування когнітивних здібностей' },
      { description: 'Прогресивні рівні складності' },
      {
        description:
          "Покращте 5 основних розумових навичок: Пам'ять, логічне мислення, майстерність у вирішенні проблем, фокус і концентрація.",
      },
    ],
    icon: <Check className='mx-[0.685rem] h-12 w-6' />,
  },
  {
    title: 'Головоломки',
    subItems: [
      { description: '150+ головоломок для розвитку інтелекту' },
      { description: 'Розумне прогресування складності' },
      {
        description:
          'Опануйте основні функції мозку: Розпізнавання Закономірностей, Стратегічне Мислення, Аналітичне Міркування.',
      },
    ],
    icon: <Check className='mx-[0.685rem] h-12 w-6' />,
  },
]

export const COMMUNITY_LINKS = [
  { icon: <Twitter className='mx-[0.685rem] h-12 w-6' />, href: 'https://github.com/heroui-inc/heroui' },
  { icon: <Instagram className='mx-[0.685rem] h-12 w-6' />, href: 'https://github.com/heroui-inc/heroui' },
  { icon: <Linkedin className='mx-[0.685rem] h-12 w-6' />, href: 'https://github.com/heroui-inc/heroui' },
]

export const BENEFITS = [
  { description: 'Сертифікація інтелекту з автентифікацією, підтверджена експертами з когнітивних наук' },
  { description: 'Глибокий аналіз, що розкриває ваш повний когнітивний потенціал та можливості' },
  { description: 'Науково калібровані тренувальні інструменти, розроблені спеціалістами з нейронауки' },
  { description: 'Експертно розроблений освітній контент на основі провідних когнітивних досліджень' },
  { description: 'Вправи на поглиблене мислення, розроблені нейробіологами' },
]

export const PLAN_ITEMS = [
  {
    title: 'ДВО ТИЖНЕВА ПІДПИСКА',
    price: '₴724.99',
    period: '2 тижні',
    benefits: [
      '7-денна пробна версія, потім автоматично поновлюється до двотижневого плану',
      'Персоналізований сертифікат IQ',
      'Комплексний когнітивний аналіз',
      'Повний доступ до інструментів розробки',
    ],
  },
  {
    title: 'ЩОМІСЯЧНА ПІДПИСКА',
    price: '₴1448.99',
    period: 'місяць',
    benefits: [
      'Максимальна економія на довгостроковому зростанні',
      'Повний набір для когнітивної оцінки',
      '20+ годин курсів під керівництвом експертів',
      'Персоналізований шлях розвитку',
    ],
  },
]
