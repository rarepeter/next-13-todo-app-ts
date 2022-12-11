import { signIn } from "next-auth/react"

interface Credentials {
    email: String
    password: String
}

const handleSignUp = async (e: React.FormEvent<HTMLFormElement>, newUserCredentials: Credentials) => {
    try {
        e.preventDefault()
        const data = await fetch('http://localhost:3000/api/users', { method: "POST", body: JSON.stringify(newUserCredentials) })
        console.log(data)

        if (data.status === 201) {
            signIn('credentials', {
                email: newUserCredentials.email,
                password: newUserCredentials.password
            })
        }
    } catch (error) {
        throw new Error("Error while creating a new user.")
    }

}

export default handleSignUp