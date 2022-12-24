import React from 'react'
import { unstable_getServerSession } from 'next-auth'
import SignUpForm from '@components/SignUpForm/SignUpForm'

export default async function SignUpPage() {
  const session = await unstable_getServerSession()

  return (
    <section>
      <SignUpForm session={session} />
    </section>
  )
}
