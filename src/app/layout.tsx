import React, { ReactNode } from 'react';
import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader';

import './globals.css'
import WraperLayout from '../components/Wraper'
import Global from '../services/Global'

const data = await Global.findOne();

export const metadata: Metadata = {
    title: data.title,
    description: data.description,
}

export const revalidate = 500;

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <WraperLayout data={data}>
            <NextTopLoader />
            {children}
        </WraperLayout>
    )
}
