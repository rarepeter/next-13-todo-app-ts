import { PrismaClient } from '@prisma/client'
import userHandler from '../../../backend/handlers/UserHandler'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default userHandler
    .post(async (req, res) => {
        try {
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
        } catch (e) {
            res.status(400).json({ message: e })
        }
    })
    .get(async (req, res) => {
        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                    name: true
                }
            })

            res.status(200).json({ message: "User list retrieved", ...users })
        } catch (e) {
            res.status(400).json({ message: e })
        }
    })