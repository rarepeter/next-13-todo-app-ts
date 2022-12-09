import React, { ButtonHTMLAttributes } from 'react'
import styles from './ButtonCta.module.css'

export default function ButtonCta({onChange = () => {}, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles[`button-cta`]} onChange={e => onChange(e)} {...props}></button>
  )
}
