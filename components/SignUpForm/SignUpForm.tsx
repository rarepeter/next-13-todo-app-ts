'use client'

import styles from './SignUpForm.module.css'

interface SignUpData {
    email: String
    password: String
}

import React, { useState } from 'react'

export default function SignUpForm() {
    const [newUserData, setNewUserData] = useState<SignUpData>({
        email: '',
        password: ''
    })
    // console.log(newUserData)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUserData((prev: SignUpData) => ({
            ...prev,
            email: e.target.value
        }))
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUserData((prev: SignUpData) => ({
            ...prev,
            password: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log(1)
        e.preventDefault()
        const data = await fetch('http://localhost:3000/api/users', { method: "POST", body: JSON.stringify(newUserData) })
        console.log(data)
    }
    return (
        <form className={styles[`sign-up-form`]} onSubmit={e => handleSubmit(e)}>
            <label htmlFor="email">Email</label>
            <input id='email' type="text" onChange={e => handleEmailChange(e)} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={e => handlePasswordChange(e)} />
            <button type="submit">Sign up</button>
        </form>
    )
}
