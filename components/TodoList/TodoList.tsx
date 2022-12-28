import ButtonCta from '@components/UI/ButtonCta/ButtonCta'
import handleMoveToRecentlyDeletedTodos from '@functions/handleMoveToRecentlyDeletedTodos/handleMoveToRecentlyDeletedTodos'
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
                        <div className={styles[`todo-card__buttons`]}>
                            <ButtonCta className={styles[`modify-button`]}>
                                <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_15_151)">
                                        <path d="M22.7413 31.9767C23.0611 31.8978 23.3636 31.8083 23.649 31.7093C25.0313 31.2326 26.1338 30.1629 26.6516 28.7956C26.653 28.7898 26.6558 28.7849 26.6573 28.7792C25.5088 30.1321 23.9128 30.0403 23.9128 30.0403C24.2671 29.8036 24.5911 29.5591 24.8851 29.3111C26.4696 27.9761 27.5392 26.1285 27.9077 24.0902C26.6101 25.595 24.8362 25.3227 24.8362 25.3227C26.9183 24.1998 28.2734 22.0842 28.4253 19.7255C28.4841 18.8235 28.5157 17.8979 28.5157 16.9522C28.5157 13.5288 28.4225 10.3484 28.0224 7.68349C27.5191 8.61984 26.4636 9.58202 24.2985 10.1513C24.2985 10.1513 24.4477 10.0817 24.6914 9.92616C27.1664 8.35177 27.9436 5.0946 26.4437 2.57453C25.4728 0.943525 24.0577 0 22 0C17.6209 0 16.1496 4.27085 15.6865 10.352C15.5202 12.5308 16.4751 14.6558 18.2173 15.9744C18.7178 16.3529 19.0605 16.5143 19.0605 16.5143C17.1232 16.0046 16.0707 15.1801 15.5102 14.3412C15.493 15.1943 15.4843 16.0619 15.4843 16.9523C15.4843 17.8979 15.5159 18.8236 15.5746 19.7256C15.7265 22.0807 17.0859 24.2021 19.1637 25.3227C19.1637 25.3227 17.3899 25.5951 16.0922 24.0903C16.4606 26.1308 17.529 27.9747 19.1149 29.3112C19.4089 29.5591 19.7329 29.8036 20.087 30.0404C20.087 30.0404 18.4911 30.1321 17.3425 28.7793C17.3454 28.7878 17.3482 28.7957 17.3526 28.8044C17.8674 30.1658 18.9628 31.2285 20.338 31.7052C20.6275 31.8055 20.9345 31.8966 21.2585 31.9769C21.2585 31.9769 20.2734 32.3949 19.0732 32.0666C19.6454 32.8164 20.2635 33.3663 20.9158 33.6516C20.9645 36.7533 21.2284 41.0693 21.9998 44.0002C22.7742 41.0606 23.0351 36.7827 23.0838 33.6516C23.7362 33.3663 24.3542 32.8165 24.9264 32.0666C23.7265 32.3947 22.7413 31.9767 22.7413 31.9767Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_15_151">
                                            <rect width="44" height="44" fill="none" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </ButtonCta>
                            <ButtonCta className={styles[`delete-button`]} onClick={(e) => handleMoveToRecentlyDeletedTodos(e, item.id, item.authorId)}>
                                <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.98685 16.4561C5.98685 16.9737 6.74672 17.6842 7.2533 17.6842H14.852C15.3586 17.6842 16.1184 16.9737 16.1184 16.4561V6.63158H5.98685V16.4561ZM17.1316 3.82974H14.4298L13.079 2.21053H9.02633L7.67545 3.82974H4.97369V5.44895H17.1316V3.82974Z" />
                                </svg>
                            </ButtonCta>
                        </div>
                    </div>
                )
            }
            )}
        </div>
    )
}
