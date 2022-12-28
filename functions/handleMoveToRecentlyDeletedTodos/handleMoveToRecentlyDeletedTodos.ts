import { SERVER_URL } from "@data/navigation/navigation"
import { Todo, User } from "@prisma/client"

const handleMoveToRecentlyDeletedTodos = async (e: any, todoId: Todo['id'], userId: User['id'], callback: any) => {
    try {
        e.preventDefault()
        const query = new URLSearchParams({
            todoId
        })

        const data = await fetch(`${SERVER_URL}/todos/${userId}?${query}`, { method: "PUT" })

        if (data) {
            callback(todoId)
        }

    } catch (e) {
        throw new Error("There has been an error when deleting the todo.")
    }
}

export default handleMoveToRecentlyDeletedTodos