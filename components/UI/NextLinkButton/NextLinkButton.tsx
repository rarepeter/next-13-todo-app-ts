import Link from 'next/link'
import React from 'react'
import styles from './NextLinkButton.module.css'


export default function NextLinkButton({ children, ...restProps }: any) {
    return (
        <Link className={styles[`link`]} {...restProps}>
                {children}
        </Link>
    )
}
