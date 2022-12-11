'use client'

import useTodos from '@hooks/useTodos/useTodos'
import React from 'react'
import useSWR from 'swr'

const fetcher = (path: any) => fetch(`http://localhost:3000${path}`).then(res => res.json())

export default function TodoList({ session }: any) {

    // const todos = useTodos()
    const todos = useSWR("/api/users", fetcher)
    console.log(todos.data)
    return (
        <div>
            {/* {todos?.map(item => (<div>{item}</div>))} */}
        </div>
    )
}
