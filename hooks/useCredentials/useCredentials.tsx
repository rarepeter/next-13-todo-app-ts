import { useState } from 'react'

interface Credentials {
    email: String
    password: String
}

export default function useCredentials() {
    const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" })

    const handlePasswordChange = (password: String) => {
        setCredentials(prev => ({ ...prev, password }))
    }

    const handleEmailChange = (email: String) => {
        setCredentials(prev => ({ ...prev, email }))
    }
    return [credentials, handleEmailChange, handlePasswordChange] as const
}
