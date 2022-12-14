import { unstable_getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'
import Navbar from '@components/Navbar/Navbar'
import '../styles/global.css'
import Providers from './providers'

interface Props {
    children?: ReactNode
}

export default async function layout({ children }: Props) {
    const session = await unstable_getServerSession()
    return (
        <html>
            <head>
                <title>Peter`s Todo app!</title>
            </head>
            <body>
                <Providers>
                    <Navbar session={session} />
                    {children}
                </Providers>
            </body>
        </html>
    )
}
