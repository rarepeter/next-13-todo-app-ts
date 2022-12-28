'use client'

import ButtonCta from '@components/UI/ButtonCta/ButtonCta'
import TextArea from '@components/UI/TextArea/TextArea'
import handleAddTodo from '@functions/handleAddTodo/handleAddTodo'
import useTodos from '@hooks/useTodo/useTodo'
import React from 'react'
import styles from './TodoAddForm.module.css'

export default function TodoAddForm({ session, onClose, handleAddTodoClient }: any) {
    const { image: userId } = session.user
    const [todo, handleChangeTodoTitle, handleChangeTodoContent] = useTodos()

    return (
        <div className={styles[`todo-add-card`]}>
            <svg className={styles[`todo-add-card__close-btn`]} onClick={onClose} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 1L13 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <form onSubmit={e => handleAddTodo(e, userId, todo, handleAddTodoClient)}>
                <TextArea
                    onChange={e => handleChangeTodoTitle(e.target.value)}
                    className={styles[`todo-add-card__text-area-box`]}
                    placeholder="Title"
                    autoFocus
                />
                <TextArea
                    onChange={e => handleChangeTodoContent(e.target.value)}
                    className={styles[`todo-add-card__text-area-box`]}
                    placeholder="Content"
                />
                <ButtonCta
                    className={styles[`todo-add-card__submit-button`]}
                    type="submit"
                >
                    Add todo
                </ButtonCta>
            </form>
        </div>
    )
}
