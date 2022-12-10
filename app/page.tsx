import { NextPage } from 'next'
import { unstable_getServerSession } from 'next-auth/next'
import React from 'react'
import '../styles/global.css'

export default async function HomePage() {
    const session = await unstable_getServerSession()
    console.log(session)
    return (
        <div>
        </div>
    )
}
