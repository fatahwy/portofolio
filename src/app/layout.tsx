import type { Metadata } from 'next'
import './globals.css'
import WraperLayout from '@/components/Wraper'

export const metadata: Metadata = {
  title: 'Fatah Projects',
  description: 'All my project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <WraperLayout>{children}</WraperLayout>
}
