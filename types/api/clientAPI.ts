import { DTodo } from 'types/databaseEntities/Todo'

interface FetchedTodosByUser {
    message: string
    fetchedUserTodos: DTodo[]
}

export default FetchedTodosByUser