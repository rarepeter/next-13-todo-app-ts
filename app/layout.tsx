import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'
import '../styles/global.css'

interface Props {
    children?: ReactNode
}

export default function layout({ children }: Props) {
    return (
        <html>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
