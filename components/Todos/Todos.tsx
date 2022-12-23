'use client'

import TodosHeader from '@components/TodosHeader/TodosHeader'
import TodoList from '@components/TodoList/TodoList'
import React, { useEffect, useState } from 'react'
import { DTodo } from 'types/databaseEntities/Todo';
import getTodosByUserId from '@functions/getTodosByUserId/getTodosByUserId';
import useFilters from '@hooks/useFilters/useFilters';

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

const defaultFilters = {
    search: "",
    sortBy: "createdAt",
    orderBy: "desc"
}

export default function Todos({ session }: any) {
    const { image: userId } = session.user

    const [filters, handleChangeSearchFilter, handleChangeSortByFilter, handleChangeOrderByFilter] = useFilters(defaultFilters)

    const [usersTodos, setUsersTodos] = useState<DTodo[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const data: FetchedTodosByUser = await getTodosByUserId(userId, filters)
            if (data) {
                setUsersTodos(data.fetchedUserTodos)
                setIsLoading(false)
            }
        })()
        
    }, [filters])

    return (
        <>
            <TodosHeader
                session={session}
                handleChangeSearchFilter={handleChangeSearchFilter}
                handleChangeSortByFilter={handleChangeSortByFilter}
                handleChangeOrderByFilter={handleChangeOrderByFilter}
            />
            {!isLoading ? <TodoListMemo todos={usersTodos} /> : (<div>Todos are loading!</div>)}
        </>
    )
}
