'use client'

import { signIn, signOut } from "next-auth/react"
import ButtonCta from "../../components/UI/ButtonCta/ButtonCta"
import InputBox from "../../components/UI/InputBox/InputBox"
import useCredentials from "../../hooks/useCredentials/useCredentials"

export default function SignInForm() {
    const [credentials, handleEmailChange, handlePasswordChange] = useCredentials()

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        signIn('credentials', {
            email: credentials.email,
            password: credentials.password
        })
    }

    return (
        <>
            <form onSubmit={(e) => handleSignIn(e)}>
                <InputBox type="email" onChange={e => handleEmailChange(e.target.value)} />
                <InputBox type="password" onChange={e => handlePasswordChange(e.target.value)} />
                <ButtonCta type="submit">Sign in</ButtonCta>
            </form>
            <ButtonCta onClick={() => signOut()}>Sign out</ButtonCta>
        </>
    )
}
