'use client'

import styles from './SignUpForm.module.css'

import React from 'react'
import InputBox from '../UI/InputBox/InputBox'
import ButtonCta from '../UI/ButtonCta/ButtonCta'
import useCredentials from '../../hooks/useCredentials/useCredentials'
import handleSignUp from '../../functions/handleSignUp/handleSignUp'

export default function SignUpForm() {
    const [newUserCredentials, handleEmailChange, handlePasswordChange] = useCredentials()

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
