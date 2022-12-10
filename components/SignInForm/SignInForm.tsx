'use client'

import ButtonCta from "../UI/ButtonCta/ButtonCta"
import InputBox from "../UI/InputBox/InputBox"
import useCredentials from "../../hooks/useCredentials/useCredentials"
import handleSignIn from "../../functions/handleSignIn/handleSignIn"

export default function SignInForm() {
    const [credentials, handleEmailChange, handlePasswordChange] = useCredentials()

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
