import NavbarLink from '@components/NavbarLink/NavbarLink'
import navigation from '@data/navigation/navigation'
import React from 'react'
import NavbarSignIn from '../NavbarSignIn/NavbarSignIn'
import styles from './Navbar.module.css'


export default function Navbar({ session }: any) {
    return (
        <nav className={styles.navbar}>
            <div className={styles.wrapper}>
                <ul className={styles[`navigation-links`]}>
                    {navigation.map(item => (
                        <NavbarLink key={item.href} href={item.href} className={styles[`navigation-links__link`]}>
                            {item.label}
                        </NavbarLink>
                    ))}
                    <NavbarSignIn styles={styles} session={session} className={styles[`navigation-links__link`]}/>
                </ul>
            </div>
        </nav>
    )
}
