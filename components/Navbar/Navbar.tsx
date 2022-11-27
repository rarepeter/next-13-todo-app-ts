import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
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
                </ul>
            </div>
        </nav>
    )
}
