'use client'

import ButtonCta from "../UI/ButtonCta/ButtonCta"
import InputBox from "../UI/InputBox/InputBox"
import useCredentials from "../../hooks/useCredentials/useCredentials"
import handleSignIn from "../../functions/handleSignIn/handleSignIn"
import { useSession } from "next-auth/react"

export default function SignInForm({ session }: any) {
    const [credentials, handleEmailChange, handlePasswordChange] = useCredentials()
    if (session && typeof window !== "undefined") {
        window.location.replace('http://localhost:3000')
    }

    return (
        <>
            <form onSubmit={(e) => handleSignIn(e, credentials)}>
                <InputBox type="email" onChange={e => handleEmailChange(e.target.value)} />
                <InputBox type="password" onChange={e => handlePasswordChange(e.target.value)} />
                <ButtonCta type="submit">Sign in</ButtonCta>
            </form>
        </>
    )
}
