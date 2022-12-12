import { TodoCreationData } from 'types/databaseEntities/Todo'
import { v4 as uuidv4 } from 'uuid'

class TodoService {
    create(userId: string, todoBody: TodoCreationData) {
        const newDatabaseTodo = {
            id: uuidv4(),
            title: todoBody.title,
            content: todoBody.content,
            status: "NOT_COMPLETED",
            authorId: userId
        }

        return newDatabaseTodo
    }
}

export default new TodoService()