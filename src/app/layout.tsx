import React, { ReactNode } from 'react';
import type { Metadata } from 'next'
// import NextProgress from 'next-progress';

import './globals.css'
import WraperLayout from '../components/Wraper'
import Global from '../services/Global'

const data = await Global.findOne();

export const metadata: Metadata = {
    title: data.title,
    description: data.description,
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <WraperLayout>
            {children}
        </WraperLayout>
    )
}
