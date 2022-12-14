import React from 'react'
import SignUpForm from '@components/SignUpForm/SignUpForm'
import { unstable_getServerSession } from 'next-auth'

export default async function SignUpPage() {
  const session = await unstable_getServerSession()
  return (
    <section>
      <SignUpForm session={session} />
    </section>
  )
}
