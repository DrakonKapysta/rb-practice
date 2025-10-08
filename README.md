## 🚀 Features

- **Character Browsing**: Browse through all Rick and Morty characters with pagination
- **Advanced Search**: Search characters by name, status, species, type, and gender
- **Character Details**: View detailed information about each character including:
  - Character image and basic information
  - Status, species, and gender
  - Origin and current location
  - Episode appearances
- **Visited Tracking**: Keep track of previously viewed characters
- **Dark/Light Theme**: Toggle between dark and light themes
- **Responsive Design**: Fully responsive design that works on all devices
- **Performance Optimized**: Optimized image loading and font rendering

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components**: [HeroUI](https://heroui.com/) (NextUI v2)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query) (React Query)
- **HTTP Client**: [Ky](https://github.com/sindresorhus/ky)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📁 Project Structure

src/
├── app/ # Next.js App Router
│ └── (app)/ # Main application routes
├── modules/ # Business logic modules
│ └── characters/ # Characters module
├── widgets/ # Self-sufficient UI components
│ ├── character-detail/ # Character detail widget
│ ├── character-list/ # Character list widget
│ └── character-search/ # Search widget
├── features/ # Reusable feature implementations
│ ├── character-card/ # Character card feature
│ └── failed-load/ # Error handling feature
├── entities/ # Business entities
│ ├── api/ # API layer
│ └── models/ # Data models
└── shared/ # Shared utilities and components
├── ui/ # UI components
├── providers/ # Custom Providers
├── store/ # Global state
└── lib/ # Utilities

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd rubylabs-practice
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
