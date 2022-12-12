import React from 'react'

export default function TodoList({ session }: any) {
    const { email } = session.user
    console.log(email)

    return (
        <div>
            Todos!
        </div>
    )
}
