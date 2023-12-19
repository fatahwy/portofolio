'use client'

import React from 'react'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'
import NextProgress from 'next-progress'
import NavBar from './Navbar/NavBar'

import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function WraperLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} max-w-5xl mx-auto`}>
                <NextProgress delay={300} />
                <Providers>
                    <NavBar />
                    <div className='py-5 px-6'>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
