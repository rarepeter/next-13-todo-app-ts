import { Todo } from '@prisma/client'
import { useState } from 'react'
import { DTodo } from 'types/databaseEntities/Todo'

export default function useUsersTodos() {
    const [usersTodos, setUsersTodos] = useState<DTodo[]>([])

    const handleSetTodos = (todos: DTodo[]) => {
        setUsersTodos(todos)
    }

    const handleAddTodoClient = (newTodo: DTodo) => {
        setUsersTodos(prev => [newTodo, ...prev])
    }

    const handleDeleteTodoClient = (todoId: Todo['id']) => {
        setUsersTodos(prev => {
            return prev.filter(todo => todo.id !== todoId)
        })
    }

    return [usersTodos, handleSetTodos, handleAddTodoClient, handleDeleteTodoClient] as const
}