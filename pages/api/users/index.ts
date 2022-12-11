import { PrismaClient } from '@prisma/client'
import userHandler from '../../../backend/handlers/UserHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { DUser, NewUserData, UserDto } from 'types/databaseEntities/User'
import Credentials from 'types/credentials'
import UserService from 'backend/services/UserService'

const prisma = new PrismaClient()
console.log(prisma)

export default userHandler
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const newUserCredentials: Credentials = JSON.parse(req.body)
            const newUserData: NewUserData = await UserService.create(newUserCredentials)

            const createdUserData: DUser = await prisma.user.create({
                data: newUserData
            })

            const createdUserDto: UserDto = UserService.createUserDto(createdUserData)

            res.status(201).json({ message: "User created.", createdUserDto })
        } catch (e) {
            res.status(400).json({ message: e })
        }
    })
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const users: UserDto[] = await prisma.user.findMany({
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