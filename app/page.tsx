import { unstable_getServerSession } from 'next-auth/next'
import React, { Suspense } from 'react'
import '@styles/global.css'
import styles from '@styles/HomePage/HomePage.module.css'
import SignInAlert from '@components/SignInAlert/SignInAlert'
import TodoList from '@components/TodoList/TodoList'

export default async function HomePage() {
    const session = await unstable_getServerSession()
    console.log(session)

    if (session) {
        const users = await fetch('http://localhost:3000/api/users').then(res => res.json())
        console.log(users)
    }

    return (
        <section className={styles[`home-page`]}>
            <div className={styles[`wrapper`]}>
                {!session ?
                    <SignInAlert /> :
                    <Suspense fallback={<div>aa</div>}>
                        <TodoList session={session} />
                    </Suspense>}
            </div>
        </section>
    )
}
