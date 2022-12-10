'use client'

import NavbarLink from "@components/NavbarLink/NavbarLink"
import { signOut } from "next-auth/react"

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
            <NavbarLink href="/sign-in">Sign in</NavbarLink>
            <NavbarLink href="/sign-up">Sign up</NavbarLink>
        </>
    )
}
