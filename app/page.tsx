import { unstable_getServerSession } from 'next-auth/next'
import { getProviders, signOut } from 'next-auth/react'
import React from 'react'
import ButtonCta from '../components/UI/ButtonCta/ButtonCta'
import '../styles/global.css'

export default async function page() {
    const session = await unstable_getServerSession()
    console.log(session)
    return (
        <div>
        </div>
    )
}
