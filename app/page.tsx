import { unstable_getServerSession } from 'next-auth/next'
import { getProviders } from 'next-auth/react'
import React from 'react'
import SignInButton from '../components/UI/SignInButton/SignInButton'
import '../styles/global.css'

export default async function page() {
    const session = await unstable_getServerSession()
    const providers = await getProviders()
    console.log(providers)
    console.log(session)
    return (
        <div>
            <SignInButton />
        </div>
    )
}
