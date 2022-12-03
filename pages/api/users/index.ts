// import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import userHandler from '../../../backend/handlers/UserHandler'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default userHandler
    .post(async (req, res) => {
        const newUser = JSON.parse(req.body)
        const { password } = newUser
        const encryptedPassword = await bcrypt.hash(password, 2)

        const data = await prisma.user.create({
            data: {
                email: newUser.email,
                password: encryptedPassword
            }
        })

        res.status(200).json({ message: "User created." })
    })
    .get(async (req, res) => {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        res.status(200).json({ message: "User list retrieved", ...users })
    })