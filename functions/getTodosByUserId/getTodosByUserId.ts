import { SERVER_URL } from "@data/navigation/navigation"

interface TodoFilters {
    search: string | "" | undefined
    sortBy: SortBy
    orderBy: OrderBy
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
    const fetchGetRequestBody = {
        userId,
        filters
    }

    const data = await fetch(`${SERVER_URL}/todos/${userId}`, { body: JSON.stringify(fetchGetRequestBody) })
}

export default getTodosByUserId