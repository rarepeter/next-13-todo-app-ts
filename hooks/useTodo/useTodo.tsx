import { useState } from 'react'

export default function useTodo() {
    const [todo, setTodo] = useState({
        title: '',
        content: ''
    })

    const handleChangeTodoTitle = (title: string) => {
        setTodo(prev => ({ ...prev, title }))
    }
    const handleChangeTodoContent = (content: string) => {
        setTodo(prev => ({ ...prev, content }))
    }

    return [todo, handleChangeTodoTitle, handleChangeTodoContent] as const
}
