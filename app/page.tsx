import React from 'react'
import { unstable_getServerSession } from 'next-auth/next'
import styles from '@styles/HomePage/HomePage.module.css'
import SignInAlert from '@components/SignInAlert/SignInAlert'
import Todos from '@components/Todos/Todos'
import '@styles/global.css'

export default async function HomePage() {
    const session = await unstable_getServerSession()

    return (
        <section className={styles[`home-page`]}>
            <div className={styles[`wrapper`]}>
                {!session ?
                    <SignInAlert /> :
                    <Todos session={session} />
                }
            </div>
        </section>
    )
}
