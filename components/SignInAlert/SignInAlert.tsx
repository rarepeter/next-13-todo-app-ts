import NextLinkButton from '@components/UI/NextLinkButton/NextLinkButton'
import React from 'react'
import styles from './SignInAlert.module.css'

export default function SignInAlert() {
  return (
    <div className={styles[`alert-container`]}>
        <div className={styles[`alert-container__message`]}>
            To create some todos, please choose one of the two options below:
        </div>
        <NextLinkButton href="/sign-in">Sign in</NextLinkButton>
        <NextLinkButton href="/sign-up">Sign up</NextLinkButton>
    </div>
  )
}
