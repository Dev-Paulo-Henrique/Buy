import { FaGithub, FaGoogle, FaWhatsapp } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from '../SignInButton/styles.module.scss'
import { signIn, signOut, useSession } from 'next-auth/client'
import {  } from "react-router-dom";
import { useRouter }from 'next/router'

export function SignInButton() {
  const [session] = useSession()
  const history = useRouter();


  return session ? (
    <button
    className={styles.signInButton}
    type="button"
    >
      
      <FaGoogle color="#04d361"/>
      {/* <FaWhatsapp color="#04d361"/> */}
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} onClick={() => signOut()}/>
    </button>
  ) : (
    <>
    <button
    className={styles.signInButton}
    type="button"
    onClick={() => signIn('google')}//colocar autenticação padrão
    >
      <FaGoogle color="#eba417" />
      Sign in with Google
    </button>
    {/* <button
    className={styles.signInButton}
    type="button"
    onClick={() => signIn('github')}//colocar autenticação padrão
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button> */}
    </>
  ) 
}