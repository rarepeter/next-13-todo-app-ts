import TodosHeader from '@components/TodosHeader/TodosHeader'
import TodoList from '@components/TodoList/TodoList'
import React, { ReactElement } from 'react'

function asyncServerComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
    return fn as (arg: T) => R;
}


export default asyncServerComponent(async function Todos({ session }: any) {
    // const { image: userId } = session.user
    // const todos = await fetch(`http://localhost:3000/api/todos/${userId}`).then(res => res.json())
    // console.log(todos)

    return (
        <>
            <TodosHeader session={session} />
            <TodoList session={session} />
        </>
    )
})
