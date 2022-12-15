import TodosHeader from '@components/TodosHeader/TodosHeader'
import TodoList from '@components/TodoList/TodoList'
import React from 'react'
import { DTodo } from 'types/databaseEntities/Todo';

function asyncServerComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
    return fn as (arg: T) => R;
}

interface fetchedTodos {
    message: string
    fetchedUserTodos: DTodo[]
}

export default asyncServerComponent(async function Todos({ session }: any) {
    const { image: userId } = session.user
    const { fetchedUserTodos: todos }: fetchedTodos = await fetch(`http://localhost:3000/api/todos/${userId}`).then(res => res.json())
    console.log(todos)

    return (
        <>
            <TodosHeader session={session} />
            <TodoList todos={todos} />
        </>
    )
})
