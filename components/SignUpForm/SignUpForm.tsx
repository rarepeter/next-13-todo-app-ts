'use client'

import styles from './SignUpForm.module.css'

import React from 'react'
import InputBox from '../UI/InputBox/InputBox'
import ButtonCta from '../UI/ButtonCta/ButtonCta'
import useCredentials from '../../hooks/useCredentials/useCredentials'
import handleSignUp from '../../functions/handleSignUp/handleSignUp'
import { CLIENT_URL } from '@data/navigation/navigation'

export default function SignUpForm({ session }: any) {
    const [newUserCredentials, handleEmailChange, handlePasswordChange] = useCredentials()
    if (session && typeof window !== "undefined") {
        window.location.replace(CLIENT_URL)
    }

    return (
        <>
            <form onSubmit={(e) => handleSignUp(e, newUserCredentials)}>
                <InputBox type="email" onChange={e => handleEmailChange(e.target.value)} />
                <InputBox type="password" onChange={e => handlePasswordChange(e.target.value)} />
                <ButtonCta type="submit">Sign up</ButtonCta>
            </form>
        </>
    )
}
