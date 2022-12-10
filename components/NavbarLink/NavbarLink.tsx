import Link from 'next/link'
import React from 'react'

export default function NavbarLink({ children, className, href, ...restProps }: any) {
    return (
        <Link href={href}>
            <li className={className}>
                {children}
            </li>
        </Link>
    )
}
