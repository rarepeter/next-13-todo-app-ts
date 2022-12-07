import { unstable_getServerSession } from 'next-auth/next'
import React from 'react'
import '../styles/global.css'

export default async function page() {
  const session = await unstable_getServerSession()
  console.log(session)
  return (
    <div>page</div>
  )
}
