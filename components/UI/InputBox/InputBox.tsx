import React, { InputHTMLAttributes } from 'react'
import styles from './InputBox.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputBox({ onChange = () => {}, type = "text", ...otherProps }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input onChange={e => onChange(e)} className={styles[`input-box`]} type={type} {...otherProps} />
    )
}
