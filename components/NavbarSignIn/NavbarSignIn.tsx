'use client'

import { signOut } from "next-auth/react"
import Link from "next/link"

export default function NavbarSignIn({ session, styles }: any) {
    if (session) {
        return (
            <li onClick={() => signOut()} className={styles[`navigation-links__link`]}>
                Sign out
            </li>
        )
    }
    return (
        <>
            <Link href="/sign-in">
                <li className={styles[`navigation-links__link`]}>
                    Sign in
                </li>
            </Link>
            <Link href="/sign-up">
                <li className={styles[`navigation-links__link`]}>
                    Sign up
                </li>
            </Link>
        </>
    )
}
