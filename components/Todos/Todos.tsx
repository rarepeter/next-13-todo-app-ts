'use client'

import TodosHeader from '@components/TodosHeader/TodosHeader'
import TodoList from '@components/TodoList/TodoList'
import React from 'react'
import useSWR from 'swr'

const fetcher = (path: String) => fetch(`http://localhost:3000/api/todos/${path}`)

export default function Todos({ session }: any) {

    const { image: userId } = session.user
    const { data } = useSWR(userId, fetcher)

    return (
        <>
            <TodosHeader />
            <TodoList session={session} />
        </>
    )
}
