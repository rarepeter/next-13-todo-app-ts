import React from 'react'
import '../styles/global.css'

const getTodos = async () => {
  const todos = await fetch('http://localhost:3000/api/todos')

  return todos.json()
}

export default async function page() {
  const todos = await getTodos()
  return (
    <div>page</div>
  )
}
