import { TodoCreationData } from 'types/databaseEntities/Todo'

const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>, userId: string, todoBody: TodoCreationData) => {
    try {
        e.preventDefault()
        const data = await fetch(`http://localhost:3000/api/todos/${userId}`, { method: "POST", body: JSON.stringify(todoBody) })
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

export default handleAddTodo