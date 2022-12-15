interface DTodo {
    id: string
    createdAt: Date
    title: string
    content: string
    status: string
    authorId: string
}

interface CreatedTodo {
    id: string
    title: string
    content: string
    status: any
    authorId: string
}

interface TodoCreationData {
    title: string
    content: string
}

enum TodoStatus {
    "NOT_COMPLETED",
    "COMPLETED",
    "DELETED"
}

export type { CreatedTodo, TodoCreationData, DTodo}