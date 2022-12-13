import SignInForm from '@components/SignInForm/SignInForm'
import { unstable_getServerSession } from 'next-auth'
import React from 'react'

export default async function SignInPage() {
  const session = await unstable_getServerSession()
  return (
    <div>
      <SignInForm session={session} />
    </div>
  )
}
