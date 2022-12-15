import { TodoCreationData } from 'types/databaseEntities/Todo'

const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>, userId: string, todoBody: TodoCreationData) => {
    try {
        e.preventDefault()
        if (todoBody.content === "" && todoBody.title === "") {
            throw new Error("Can not add empty todo!")
        }
        const data = await fetch(`http://localhost:3000/api/todos/${userId}`, { method: "POST", body: JSON.stringify(todoBody) })
        if (data) {
            window.location.reload()
        } else {
            throw new Error("There was an error when creating todo.")
        }
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

export default handleAddTodo