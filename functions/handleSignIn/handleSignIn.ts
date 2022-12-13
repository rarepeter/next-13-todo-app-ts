import { signIn } from "next-auth/react"

interface Credentials {
    email: String
    password: String
}

const handleSignIn = async (e: React.FormEvent<HTMLFormElement>, credentials: Credentials) => {
    e.preventDefault()
    await signIn('credentials', {
        email: credentials.email,
        password: credentials.password
    })
}

export default handleSignIn