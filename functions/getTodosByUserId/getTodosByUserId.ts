import { SERVER_URL } from "@data/navigation/navigation"
import TodoFilters from "types/TodoFilters"

const getTodosByUserId = async (userId: string, filters: TodoFilters) => {
    const query = new URLSearchParams({
        search: filters.search,
        sortBy: filters.sortBy,
        orderBy: filters.orderBy
    })

    const data = await fetch(`${SERVER_URL}/todos/${userId}?${query}`)
    return data.json()
}

export default getTodosByUserId