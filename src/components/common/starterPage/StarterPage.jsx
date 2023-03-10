import { useState } from 'react'
import LogInForm from './loginForm'
import RegisterForm from './registerForm'

const StarterPage = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(true)

  const accountHandler = () => {
    setHaveAnAccount(!haveAnAccount)
  }

  return (
    <>
      {haveAnAccount ? (
        <LogInForm changeForm={accountHandler} />
      ) : (
        <RegisterForm changeForm={accountHandler} />
      )}
    </>
  )
}
export default StarterPage
