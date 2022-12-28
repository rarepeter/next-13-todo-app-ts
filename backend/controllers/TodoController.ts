import { PrismaClient, Todo } from "@prisma/client";
import { CreatedTodo } from "types/databaseEntities/Todo";

const prisma = new PrismaClient()

class TodoController {
    async create(newTodoData: CreatedTodo) {
        const createdTodo: Todo = await prisma.todo.create({
            data: newTodoData
        })

        return createdTodo
    }

    async moveToDeleted(todoId: Todo['id']) {
        const deletedTodo: Todo = await prisma.todo.update({
            where: {
                id: todoId
            },
            data: {
                status: "DELETED"
            }
        })

        return deletedTodo
    }
}

export default new TodoController()