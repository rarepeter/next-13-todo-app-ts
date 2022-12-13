'use client'

import ButtonCta from '@components/UI/ButtonCta/ButtonCta'
import TextArea from '@components/UI/TextArea/TextArea'
import handleAddTodo from '@functions/handleAddTodo/handleAddTodo'
import useTodos from '@hooks/useTodo/useTodo'
import React from 'react'
import styles from './TodoAddForm.module.css'

export default function TodoAddForm({ session }: any) {
    const { image: userId } = session.user
    const [todo, handleChangeTodoTitle, handleChangeTodoContent] = useTodos()
    console.log({
        user: userId,
        todoBody: todo
    })
    return (
        <div className={styles[`todo-add-card`]}>
            <form onSubmit={e => handleAddTodo(e, userId, todo)}>

                <TextArea
                    onChange={e => handleChangeTodoTitle(e.target.value)}
                    className={styles[`todo-add-card__text-area-box`]}
                    placeholder="Title"
                />
                <TextArea
                    onChange={e => handleChangeTodoContent(e.target.value)}
                    className={styles[`todo-add-card__text-area-box`]}
                    placeholder="Content"
                />
                <ButtonCta type="submit">Add todo</ButtonCta>
            </form>
        </div>
    )
}
