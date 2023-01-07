import UserService from "backend/services/UserService";
import { NextApiRequest, NextApiResponse } from "next";
import Credentials from "types/Credentials";
import { IUserDto } from "types/databaseEntities/User";

class UserController {
    async create(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        try {
            const newUserCredentials: Credentials = JSON.parse(req.body)

            const createdUserDto: IUserDto = await UserService.create(newUserCredentials)

            if (createdUserDto) {
                res.status(201).json({ message: "User created!", userDto: createdUserDto })
            } else {
                res.status(400).json({ message: "There has been a problem while creating a user." })
            }

        } catch (err) {
            res.status(400)
            throw new Error("There has been an error while creating a user!")
        }
    }

    async get(req: NextApiRequest, res: NextApiResponse): Promise<void> {
        try {
            const users: IUserDto[] = await UserService.get()

            if (users) {
                res.status(200).json({ message: "User list retrieved!", users: [...users] })
            } else {
                res.status(400).json({ message: "There has been an error while retrieving users list!" })
            }

        } catch (err) {
            res.status(400).json({ message: "There has been an error while retrieving users list!" })
            throw new Error("There has been an error while retrieving users list!")
        }
    }
}

export default new UserController()