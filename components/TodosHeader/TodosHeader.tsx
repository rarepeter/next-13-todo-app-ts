'use client'

import SelectionList from '@components/SelectionList/SelectionList'
import TodoAddForm from '@components/TodoAddForm/TodoAddForm'
import ButtonCta from '@components/UI/ButtonCta/ButtonCta'
import sortByOptions from '@data/sortByOptions/sortByOptions'
import React, { useState } from 'react'
import styles from './TodosHeader.module.css'

export default function TodosHeader({ session }: any) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className={styles[`todos-header`]}>
            {isOpen ?
                <TodoAddForm session={session} onClose={() => setIsOpen(false)} /> :
                <ButtonCta onClick={() => setIsOpen(true)}>+</ButtonCta>
            }
            <SelectionList selectionListOptions={sortByOptions} />
        </div>
    )
}
