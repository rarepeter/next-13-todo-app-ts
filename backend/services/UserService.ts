import bcrypt from 'bcrypt'
import Credentials from 'types/credentials'
import { DUser, UserDto } from 'types/databaseEntities/User'
import { v4 as uuidv4 } from 'uuid'

class User {
    async create(newUserCredentials: Credentials) {
        const encryptedPassword = await bcrypt.hash(newUserCredentials.password, 2)

        const newDatabaseUser = {
            email: newUserCredentials.email,
            name: "NewUser",
            password: encryptedPassword,
            verificationString: uuidv4(),
            verified: false
        }

        return newDatabaseUser
    }

    createUserDto(createdUserData: DUser): UserDto {
        const userDto = {
            id: createdUserData.id,
            email: createdUserData.email,
            name: createdUserData.name
        }

        return userDto
    }
}

export default new User()