import {
  BrainLampIcon,
  CheckListIcon,
  DetailedReportIcon,
  FacebookIcon,
  InstagramIcon,
  MetaIcon,
  MindPuzzleIcon,
  RelationsHandsIcon,
  RocketIcon,
} from '@/app/(client)/shared/assets/icon'

import BY from 'country-flag-icons/react/3x2/BY'
import PL from 'country-flag-icons/react/3x2/PL'
import RO from 'country-flag-icons/react/3x2/RO'
import UA from 'country-flag-icons/react/3x2/UA'
import US from 'country-flag-icons/react/3x2/US'

export const AVAILABLE_TESTS_MAP = {
  iq_test: {
    icon: <BrainLampIcon />,
    time: '15',
    questions: '25',
  },
  personality_test: {
    icon: <BrainLampIcon />,
    time: '20',
    questions: '90',
  },
  love_style_test: {
    icon: <RelationsHandsIcon />,
    time: '30',
    questions: '120',
  },
  career_test: {
    icon: <MindPuzzleIcon />,
    time: '25',
    questions: '35',
  },
}

export const COMMUNITY_LINKS = [
  {
    icon: <MetaIcon className='mx-[0.685rem] h-12 w-6' />,
    href: 'https://www.twitter.com/',
  },
  {
    icon: <InstagramIcon className='mx-[0.685rem] h-12 w-6' />,
    href: 'https://www.instagram.com/',
  },
  {
    icon: <FacebookIcon className='mx-[0.685rem] h-12 w-6' />,
    href: 'https://www.facebook.com/',
  },
]

export const AVATARS = [
  'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  'https://i.pravatar.cc/150?u=a04258114e29026302d',
]

export const ICON_MAP = {
  checklist: <CheckListIcon />,
  report: <DetailedReportIcon />,
  rocket: <RocketIcon />,
} as const

export const COUNTRIES = {
  UA: <UA title='Ukraine' />,
  RO: <RO title='Romania' />,
  BY: <BY title='Belarus' />,
  PL: <PL title='Poland' />,
  US: <US title='United States' />,
} as const

export const LATEST_RESULTS_ITEMS = {
  items: [
    {
      name: 'Roman Kharchenko',
      iq: 98,
      country: 'RO',
    },
    {
      name: 'Dmitrii Dovhalenko',
      iq: 104,
      country: 'BY',
    },

    {
      name: 'Jan Kowalski',
      iq: 102,
      country: 'PL',
    },

    {
      name: 'Oleksandr Fedorov',
      iq: 106,
      country: 'UA',
    },

    {
      name: 'John Doe',
      iq: 106,
      country: 'US',
    },

    {
      name: 'Jane Doe',
      iq: 106,
      country: 'US',
    },

    {
      name: 'Taras Tarasenko',
      iq: 106,
      country: 'UA',
    },

    {
      name: 'Yaroslav Yaroslavenko',
      iq: 106,
      country: 'RO',
    },

    {
      name: 'Andrii Andrienko',
      iq: 106,
      country: 'UA',
    },
  ] as const,
}
