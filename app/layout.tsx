import { unstable_getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'
import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../styles/global.css'

interface Props {
    children?: ReactNode
}

export default async function layout({ children }: Props) {
    const session = await unstable_getServerSession()
    return (
        <html>
            <body>
                <Navbar session={session} />
                {children}
            </body>
        </html>
    )
}
