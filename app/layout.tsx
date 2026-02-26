import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fitmaker - Gym & Fitness Community',
  description: 'Transform your body and mind with Fitmaker - Your ultimate fitness destination',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
