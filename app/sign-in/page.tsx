import React from 'react'
import { unstable_getServerSession } from 'next-auth'
import SignInForm from '@components/SignInForm/SignInForm'

export default async function SignInPage() {
  const session = await unstable_getServerSession()

  return (
    <div>
      <SignInForm session={session} />
    </div>
  )
}
