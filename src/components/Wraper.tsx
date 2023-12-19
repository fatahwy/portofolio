'use client'

import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'
import NextProgress from 'next-progress'
import NavBar from './NavBar'

import '../app/globals.css'
import { GlobalType } from '@/services/Global'

const inter = Inter({ subsets: ['latin'] })

export default function WraperLayout({
    data,
    children,
}: {
    data: GlobalType,
    children: ReactNode
}) {    
    return (
        <html lang="en">
            <body className={`${inter.className} max-w-5xl mx-auto`}>
                <NextProgress delay={300} />
                <Providers>
                    <NavBar {...data} />
                    <div className='py-5 px-6'>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}
