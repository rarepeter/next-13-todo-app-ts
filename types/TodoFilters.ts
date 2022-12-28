interface TodoFilters {
    search: string
    sortBy: "createdAt" | "title" | "content"
    orderBy: "asc" | "desc"
}

export default TodoFilters