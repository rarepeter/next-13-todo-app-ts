import { PrismaClient, Todo } from "@prisma/client";
import TodoController from "backend/controllers/TodoController";
import todoHandler from "backend/handlers/TodoHandler";
import TodoService from "backend/services/TodoService";
import { NextApiRequest, NextApiResponse } from "next";
import { CreatedTodo, TodoCreationData } from "types/databaseEntities/Todo";

const prisma = new PrismaClient()

export default todoHandler
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const { userId, search, sortBy, orderBy }: any = req.query

        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId
            },
            orderBy: {
                [sortBy]: orderBy
            }
        })

        res.status(200).json({ message: "Todos have been fetched!", fetchedUserTodos })

    })
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        const { userId }: any = req.query
        const todoBody: TodoCreationData = JSON.parse(req.body)

        const newTodoData: CreatedTodo = TodoService.create(userId, todoBody)
        const createdTodo: Todo = await TodoController.create(newTodoData)

        if (createdTodo) {
            res.status(201).json({ message: "Todo has been created!", createdTodo })
        }
    })
    .delete(async (req: NextApiRequest, res: NextApiResponse) => {
        const { userId }: any = req.query

    })