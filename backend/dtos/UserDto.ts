import { User } from "@prisma/client"

class UserDto {
    id: User['id']
    email: User[`email`]
    name: User[`name`]

    constructor(newUserData: User) {
        this.id = newUserData.id
        this.email = newUserData.email
        this.name = newUserData.name
    }
}

export default UserDto