'use client'

import SelectionList from '@components/SelectionList/SelectionList'
import TodoAddForm from '@components/TodoAddForm/TodoAddForm'
import ButtonCta from '@components/UI/ButtonCta/ButtonCta'
import React, { useState } from 'react'
import styles from './TodosHeader.module.css'
import { orderByOptions, sortByOptions, typeOptions } from '@data/todo-filters/todoFiltersOptions'

export default function TodosHeader({ session, handleChangeSearchFilter, handleChangeSortByFilter, handleChangeOrderByFilter, handleChangeTypeFilter, handleAddTodoClient }: any) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={styles[`todos-header`]}>
            {isOpen ?
                <TodoAddForm session={session} onClose={() => setIsOpen(false)} handleAddTodoClient={handleAddTodoClient}/> :
                <ButtonCta className={styles[`todos-header__todo-add-button`]} onClick={() => setIsOpen(true)}>+</ButtonCta>
            }
            <SelectionList selectionListOptions={sortByOptions} handleSetValue={handleChangeSortByFilter} />
            <SelectionList selectionListOptions={orderByOptions} handleSetValue={handleChangeOrderByFilter} />
            <SelectionList selectionListOptions={typeOptions} handleSetValue={handleChangeTypeFilter} />
        </div>
    )
}
