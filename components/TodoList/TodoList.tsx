import { getShortDateString } from '@functions/time/time'
import React from 'react'
import { DTodo } from 'types/databaseEntities/Todo'
import styles from './TodoList.module.css'

interface TodoListProps {
    todos: DTodo[]
}

export default function TodoList({ todos }: TodoListProps) {
    return (
        <div className={styles[`todo-list-wrapper`]}>
            {todos.map((item: DTodo) => {
                const dateCreated = getShortDateString(new Date(item.createdAt))
                return (
                    <div key={item.id} className={styles[`todo-card`]}>
                        <div className={styles[`todo-card__title`]}>{item.title}</div>
                        <div className={styles[`todo-card__content`]}>{item.content}</div>
                        <div className={styles[`todo-card__date-created`]}>Created on {dateCreated}</div>
                    </div>
                )
            }
            )}
        </div>
    )
}
