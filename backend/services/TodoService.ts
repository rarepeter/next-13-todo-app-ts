import { TodoCreationData } from 'types/databaseEntities/Todo'
import { v4 as uuidv4 } from 'uuid'

class TodoService {
    create(userId: string, todoBody: TodoCreationData) {
        let todoTitle
        if (todoBody.title === "") {
            todoTitle = "Untitled"
        } else {
            todoTitle = todoBody.title
        }

        const newDatabaseTodo = {
            id: uuidv4(),
            title: todoTitle,
            content: todoBody.content,
            status: "NOT_COMPLETED",
            authorId: userId
        }

        return newDatabaseTodo
    }
}

export default new TodoService()