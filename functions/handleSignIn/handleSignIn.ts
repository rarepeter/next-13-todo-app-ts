import { signIn } from "next-auth/react"

interface Credentials {
    email: String
    password: String
}

const handleSignIn = (e: React.FormEvent<HTMLFormElement>, credentials: Credentials) => {
    e.preventDefault()
    signIn('credentials', {
        email: credentials.email,
        password: credentials.password
    })
}

export default handleSignIn