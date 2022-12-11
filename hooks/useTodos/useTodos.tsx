import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

interface Todo {
    id: Number
    createdAt: Date
    title: string
    content: string
    authorId: Number
}

const fetcher = (path: any) => fetch(`http://localhost:3000${path}`).then(res => res.json())

export default function useTodos() {
    const [todos, setTodos] = useState([])

    const { data } = useSWR('/api/users', fetcher)
    useEffect(() => {
        setTodos(data)
    }, [])

    return todos
}
