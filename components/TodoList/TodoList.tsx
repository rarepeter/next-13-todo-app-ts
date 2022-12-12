import React from 'react'

export default function TodoList({ session }: any) {
    const { email } = session.user
    console.log(email)
    // const todos = fetch("http://localhost:3000/api/todos")

    return (
        <div>
            {/* {todos?.map(item => (<div>{item}</div>))} */}
        </div>
    )
}
