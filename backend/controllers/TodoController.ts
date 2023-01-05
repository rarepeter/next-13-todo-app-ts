import { Todo } from "@prisma/client";
import TodoService from "backend/services/TodoService";
import { NextApiRequest, NextApiResponse } from "next";
import { TodoCreationData } from "types/databaseEntities/Todo";
import TodoFilters from "types/TodoFilters";

class TodoController {

    async create(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { userId }: any = req.query
            const todoBody: TodoCreationData = JSON.parse(req.body)

            const newTodoData: Todo = await TodoService.create(userId, todoBody)

            if (newTodoData) {
                res.status(201).json({ message: "The todo has been created!", newTodoData })
            } else {
                res.status(400).json({ message: "There has been an error while creating the todo!" })
            }

        } catch (err) {
            console.log(err)
            throw new Error("There has been an error while creating the todo!")
        }
    }

    async get(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { userId, search, sortBy, orderBy, type }: any = req.query

            const filters: TodoFilters = {
                search,
                sortBy,
                orderBy,
                type
            }

            let fetchedUserTodos: Todo[] = await TodoService.get(userId, filters)

            if (fetchedUserTodos) {
                res.status(200).json({ message: "Todos have been fetched!", fetchedUserTodos })
            } else {
                res.status(400).json({ message: "There has been an error!" })
            }

        } catch (err) {
            console.log(err)
            throw new Error("There has been a problem while fetching the todos!")
        }
    }

    async moveToDeleted(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { todoId }: any = req.query
            const temporarilyDeletedTodo: Todo = await TodoService.moveToDeleted(todoId)

            if (temporarilyDeletedTodo) {
                res.status(200).json({ message: "The todo has been declared recently deleted.", temporarilyDeletedTodo })
            } else {
                res.status(400).json({ message: "There has been an error!" })
            }


        } catch (err) {
            console.log(err)
            throw new Error("There has been a problem while declaring the todo recently deleted!")
        }
    }
}

export default new TodoController()