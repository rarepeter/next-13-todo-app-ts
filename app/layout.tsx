import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'

interface Props {
    children?: ReactNode
}

export default function layout({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
