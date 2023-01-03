import { PrismaClient, Todo, User } from "@prisma/client";
import { CreatedTodo } from "types/databaseEntities/Todo";
import TodoFilters from "types/TodoFilters";

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

    async getAllTodos(userId: User['id'], filters: TodoFilters) {
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId
            },
            orderBy: {
                [filters.sortBy]: filters.orderBy
            }
        })

        return fetchedUserTodos
    }

    async getAllNotDeletedTodos(userId: User['id'], filters: TodoFilters) {
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId,
                OR: [
                    {
                        status: "COMPLETED"
                    },
                    {
                        status: "NOT_COMPLETED"
                    }
                ]
            },
            orderBy: {
                [filters.sortBy]: filters.orderBy
            }
        })

        return fetchedUserTodos
    }

    async getCompletedTodos(userId: User['id'], filters: TodoFilters) {
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId,
                status: "COMPLETED"
            },
            orderBy: {
                [filters.sortBy]: filters.orderBy
            }
        })

        return fetchedUserTodos
    }

    async getNotCompletedTodos(userId: User['id'], filters: TodoFilters) {
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId,
                status: "NOT_COMPLETED"
            },
            orderBy: {
                [filters.sortBy]: filters.orderBy
            }
        })

        return fetchedUserTodos
    }

    async getRecentlyDeletedTodos(userId: User['id'], filters: TodoFilters) {
        const fetchedUserTodos: Todo[] = await prisma.todo.findMany({
            where: {
                authorId: userId,
                status: "DELETED"
            },
            orderBy: {
                [filters.sortBy]: filters.orderBy
            }
        })

        return fetchedUserTodos
    }
}

export default new TodoController()