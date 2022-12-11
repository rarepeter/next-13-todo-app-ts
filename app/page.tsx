import { unstable_getServerSession } from 'next-auth/next'
import React from 'react'
import '@styles/global.css'
import styles from '@styles/HomePage/HomePage.module.css'
import SignInAlert from '@components/SignInAlert/SignInAlert'

export default async function HomePage() {
    const session = await unstable_getServerSession()
    console.log(session)

    return (
        <section className={styles[`home-page`]}>
            <div className={styles[`wrapper`]}>
                {session ? <SignInAlert /> : null}
            </div>
        </section>
    )
}
