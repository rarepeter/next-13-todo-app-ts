import React, { InputHTMLAttributes } from 'react'

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
// }

export default function InputBox({ type = "text", ...restProps }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input type={type} {...restProps} />
    )
}
