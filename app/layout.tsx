import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '큐브놀이',
  description: '몇 가지 큐브 장난질입니다',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
