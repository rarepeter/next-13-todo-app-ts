'use client'

import React, { ButtonHTMLAttributes } from 'react'
import styles from './ButtonCta.module.css'

export default function ButtonCta({ onClick = () => { }, className = styles[`button-cta`], children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles[`button-cta`]} onClick={onClick} {...props}>{children}</button>
  )
}
