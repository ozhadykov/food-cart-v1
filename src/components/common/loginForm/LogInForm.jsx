import { useState } from 'react'
import styles from './LogInForm.module.css'

const LogInForm = ({ setLoggedIn }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const emailHandler = (value) => {
    setEmail(value)
  }

  const passwordHandler = (value) => {
    setPassword(value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setLoggedIn(true)
    console.log(email, password)
  }

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Hello, This Project is about Food</h1>
        <p>Login to Continue</p>
      </div>
      <div className={styles.formContainer}>
        <form onSubmit={submitHandler}>
          <label>
            Email
            <input
              type="email"
              onChange={(e) => emailHandler(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={(e) => passwordHandler(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}
export default LogInForm
