import { SERVER_URL } from "@data/navigation/navigation"

interface TodoFilters {
    search: string | ""
    sortBy: string
    orderBy: string
}

enum SortBy {
    "date",
    "title",
    "content",
    "",
    undefined
}

enum OrderBy {
    "asc",
    "desc",
    "",
    undefined
}

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