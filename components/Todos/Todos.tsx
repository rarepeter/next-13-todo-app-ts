'use client'

import TodosHeader from '@components/TodosHeader/TodosHeader'
import TodoList from '@components/TodoList/TodoList'
import React, { useEffect, useState } from 'react'
import { DTodo } from 'types/databaseEntities/Todo';
import getTodosByUserId from '@functions/getTodosByUserId/getTodosByUserId';
import useFilters from '@hooks/useFilters/useFilters';
import FetchedTodosByUser from 'types/api/clientAPI';
import TodoFilters from 'types/TodoFilters';
import useUsersTodos from '@hooks/useUsersTodos/useUsersTodos';

const TodoListMemo = React.memo(TodoList)

const defaultFilters: TodoFilters = {
    search: "",
    sortBy: "createdAt",
    orderBy: "desc"
}

export default function Todos({ session }: any) {
    const { image: userId } = session.user

    const [filters, handleChangeSearchFilter, handleChangeSortByFilter, handleChangeOrderByFilter] = useFilters(defaultFilters)

    const [usersTodos, handleSetTodos, handleAddTodo, handleDeleteTodo] = useUsersTodos()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const data: FetchedTodosByUser = await getTodosByUserId(userId, filters)
            if (data) {
                handleSetTodos(data.fetchedUserTodos)
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
