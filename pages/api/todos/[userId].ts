import { PrismaClient, Todo } from "@prisma/client";
import todoHandler from "backend/handlers/TodoHandler";
import TodoService from "backend/services/TodoService";
import { NextApiRequest, NextApiResponse } from "next";
import { CreatedTodo, TodoCreationData } from "types/databaseEntities/Todo";

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
        const searchString: any = req.body.filters.search
        console.log(typeof searchString)
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId,
                // OR: [
                //     {
                //         title: {
                //             search: searchString
                //         }
                //     },
                //     {
                //         content: {
                //             search: searchString
                //         }
                //     }
                // ]
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        res.status(200).json({ message: "Todos have been fetched!", fetchedUserTodos: [...fetchedUserTodos] })

    })
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        const { userId }: any = req.query
        const todoBody: TodoCreationData = JSON.parse(req.body)

        const newTodoData: CreatedTodo = TodoService.create(userId, todoBody)
        const createdTodo: Todo = await prisma.todo.create({
            data: newTodoData
        })

        if (createdTodo) {
            res.status(201).json({ message: "Todo has been created!", createdTodo })
        }
    })