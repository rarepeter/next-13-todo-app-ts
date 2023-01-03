interface TodoFilters {
    search: string
    sortBy: "createdAt" | "title" | "content"
    orderBy: "asc" | "desc"
    type: "all-not-deleted" | "not-completed" | "completed" | "recently-deleted" | "all"
}

export default TodoFilters