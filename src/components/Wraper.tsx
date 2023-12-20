import React, { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'
import NavBar from './NavBar'

import '../app/globals.css'
import { GlobalType } from '@/types/Global'

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
