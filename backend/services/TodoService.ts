import { PrismaClient, Todo, User } from '@prisma/client'
import isTitleEmpty from 'backend/functions/isTitleEmpty'
import { CreatedTodo, TodoCreationData } from 'types/databaseEntities/Todo'
import TodoFilters from 'types/TodoFilters'
import { v4 as uuidv4 } from 'uuid'

const prisma = new PrismaClient()

class TodoService {
    async get(userId: User['id'], filters: TodoFilters) {

        let fetchedUserTodos: Todo[]

        switch (filters.type) {
            case "all-not-deleted":
                fetchedUserTodos = await prisma.todo.findMany({
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
                break
            case "not-completed":
                fetchedUserTodos = await prisma.todo.findMany({
                    where: {
                        authorId: userId,
                        status: "NOT_COMPLETED"
                    },
                    orderBy: {
                        [filters.sortBy]: filters.orderBy
                    }
                })
                break
            case "completed":
                fetchedUserTodos = await prisma.todo.findMany({
                    where: {
                        authorId: userId,
                        status: "COMPLETED"
                    },
                    orderBy: {
                        [filters.sortBy]: filters.orderBy
                    }
                })
                break
            case "recently-deleted":
                fetchedUserTodos = await prisma.todo.findMany({
                    where: {
                        authorId: userId,
                        status: "DELETED"
                    },
                    orderBy: {
                        [filters.sortBy]: filters.orderBy
                    }
                })
                break
            default:
                fetchedUserTodos = await prisma.todo.findMany({
                    where: {
                        authorId: userId
                    },
                    orderBy: {
                        [filters.sortBy]: filters.orderBy
                    }
                })
                break
        }

        return fetchedUserTodos
    }

    async create(userId: User['id'], todoBody: TodoCreationData) {
        const todoTitle = isTitleEmpty(todoBody.title)
        const newDatabaseTodo: CreatedTodo = {
            id: uuidv4(),
            title: todoTitle,
            content: todoBody.content,
            status: "NOT_COMPLETED",
            authorId: userId
        }

        const createdTodo: Todo = await prisma.todo.create({
            data: newDatabaseTodo
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

export default new TodoService()