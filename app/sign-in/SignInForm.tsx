'use client'

import { signIn } from "next-auth/react"
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
        <form onSubmit={(e) => handleSignIn(e)}>
            <input type="email" onChange={e => handleEmailChange(e.target.value)} />
            <input type="password" onChange={e => handlePasswordChange(e.target.value)} />
        </form>
    )
}
