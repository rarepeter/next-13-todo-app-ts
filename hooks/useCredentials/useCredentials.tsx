import Credentials from 'types/credentials'
import { useState } from 'react'

export default function useCredentials() {
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" })

    const handlePasswordChange = (password: string) => {
        setCredentials(prev => ({ ...prev, password }))
    }

    const handleEmailChange = (email: string) => {
        setCredentials(prev => ({ ...prev, email }))
    }

    return [credentials, handleEmailChange, handlePasswordChange] as const
}
