import { useState } from 'react'
import styles from './LogInForm.module.css'
import Card from '../../UI/Card'
import Form from '../../UI/Form'

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
    <Card className={styles.container}>
      <div className={styles.leftPart}>
        <div className={styles.imgcontainer}></div>
        <div className={styles.line}></div>
        <h1>Welcome to RecipeApp</h1>
        {/* <p>Login or Register to continue</p> */}
      </div>
      <div className={styles.rightPart}>
        <h1>Login</h1>
        <Form
          formObject={[
            {
              key: 'emailFromLogin',
              label: 'Email',
              inputType: 'email',
              value: email,
              emailHandler,
            },
            {
              key: 'passwordFromLogin',
              label: 'Password',
              inputType: 'password',
              value: password,
              passwordHandler,
            },
          ]}
          onSubmit={submitHandler}
          buttonTitle="Login"
        />
        <p>Don't have an Account? Sign Up</p>
        {/* TODO: Create 2 Components LoginForm Comp and RegisterComponent and one main Welcome Component  */}
      </div>
    </Card>
  )
}
export default LogInForm
