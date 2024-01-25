import ThemeClient from './components/themeClient'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '잠재능력 시뮬레이터',
  description: '메이플스토리 잠재능력 시뮬레이터입니다',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ThemeClient>{children}</ThemeClient>
      </body>
    </html>
  )
}
