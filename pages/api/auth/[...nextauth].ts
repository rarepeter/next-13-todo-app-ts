import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in with credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const prisma = new PrismaClient()

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email
                    },
                    select: {
                        id: true,
                        email: true,
                        name: true,
                        password: true
                    }
                })
                if (credentials?.password && user) {
                    const passwordValidation = await bcrypt.compare(credentials.password, user.password)
                    if (passwordValidation) {
                        return { id: user.id, name: user.name, email: user.email, image: user.id }
                    }
                }
                return null
            }
        })
    ]
}

export default NextAuth(authOptions)