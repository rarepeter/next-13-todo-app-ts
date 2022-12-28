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

    async delete(todoId: Todo['id']) {

    }
}

export default new TodoController()