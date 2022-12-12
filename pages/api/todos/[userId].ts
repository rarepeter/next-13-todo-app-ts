import { PrismaClient, Todo } from "@prisma/client";
import todoHandler from "backend/handlers/TodoHandler";
import TodoService from "backend/services/TodoService";
import { NextApiRequest, NextApiResponse } from "next";
import { CreatedTodo } from "types/databaseEntities/Todo";

const prisma = new PrismaClient()

interface TodoCreationDataRequest extends NextApiRequest {
    body: {
        title: string
        content: string
    }
}

export default todoHandler
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { userId }: any = req.query
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId
            }
        })
        res.status(200).json({ message: "Todos have been fetched!", fetchedUserTodos: [...fetchedUserTodos] })

    })
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        const { userId }: any = req.query
        const { body: todoBody }: TodoCreationDataRequest = req

        const newTodoData: CreatedTodo = TodoService.create(userId, todoBody)
        const createdTodo: Todo = await prisma.todo.create({
            data: newTodoData
        })

        if (createdTodo) {
            res.status(201).json({ message: "Todo has been created!", createdTodo })
        }
    })