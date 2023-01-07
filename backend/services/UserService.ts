import { PrismaClient, User } from '@prisma/client'
import UserDto from 'backend/dtos/UserDto'
import bcrypt from 'bcrypt'
import Credentials from 'types/Credentials'
import { IUserDto } from 'types/databaseEntities/User'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

class UserService {
    async create(newUserCredentials: Credentials): Promise<IUserDto> {
        const encryptedPassword = await bcrypt.hash(newUserCredentials.password, 2)

        const newDatabaseUser: User = {
            id: uuidv4(),
            email: newUserCredentials.email,
            name: "NewUser",
            roles: ["USER"],
            password: encryptedPassword,
            verificationString: uuidv4(),
            verified: false
        }

        const createdUserData: User = await prisma.user.create({
            data: newDatabaseUser
        })

        const userDto: IUserDto = new UserDto(createdUserData)

        return userDto
    }

    async get(): Promise<IUserDto[]> {
        const users: IUserDto[] = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true
            }
        })

        return users
    }
}

export default new UserService()