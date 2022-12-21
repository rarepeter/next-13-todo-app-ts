'use client'

import TodosHeader from '@components/TodosHeader/TodosHeader'
import TodoList from '@components/TodoList/TodoList'
import React, { useEffect, useState } from 'react'
import { DTodo } from 'types/databaseEntities/Todo';
import getTodosByUserId from '@functions/getTodosByUserId/getTodosByUserId';

function asyncServerComponent<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
    return fn as (arg: T) => R;
}

interface FetchedTodosByUser {
    message: string
    fetchedUserTodos: DTodo[]
}

const TodoListMemo = React.memo(TodoList)

// export default asyncServerComponent(async function Todos({ session }: any) {
//     const { image: userId } = session.user
//     const filters = {
//         search: "MySearchParameter",
//         sortBy: "createdAt",
//         orderBy: "desc"
//     }

//     const data: FetchedTodosByUser = await getTodosByUserId(userId, filters)

//     return (
//         <>
//             <TodosHeader session={session} />
//             <TodoListMemo todos={data.fetchedUserTodos} />
//         </>
//     )
// })

export default function Todos({ session }: any) {
    const { image: userId } = session.user
    const filters = {
        search: "",
        sortBy: "createdAt",
        orderBy: "desc"
    }

    // const [filters, setFilters] = useState()

    const [usersTodos, setUsersTodos] = useState<DTodo[]>([])

    useEffect(() => {
        (async () => {
            const data: FetchedTodosByUser = await getTodosByUserId(userId, filters)
            if (data) {
                setUsersTodos(data.fetchedUserTodos)
            }
        })()

    }, [])
    console.log(usersTodos)

    return (
        <>
            <TodosHeader session={session} />
            {usersTodos ? <TodoListMemo todos={usersTodos} /> : null}
        </>
    )
}
