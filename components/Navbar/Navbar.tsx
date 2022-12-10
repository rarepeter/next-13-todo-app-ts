import Link from 'next/link'
import React from 'react'
import NavbarSignIn from '../NavbarSignIn/NavbarSignIn'
import styles from './Navbar.module.css'

export default function Navbar({ session }: any) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <ul className={styles[`navigation-links`]}>
                    <Link href="/">
                        <li className={styles[`navigation-links__link`]}>
                            Home
                        </li>
                    </Link>
                    <Link href="/appointments">
                        <li className={styles[`navigation-links__link`]}>
                            Appointments
                        </li>
                    </Link>
                    <Link href="/deleted-recently">
                        <li className={styles[`navigation-links__link`]}>
                            Recently deleted todos
                        </li>
                    </Link>
                    <NavbarSignIn styles={styles} session={session} />
                </ul>
            </div>
        </nav>
    )
}
