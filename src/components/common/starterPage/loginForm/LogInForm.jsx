import { useContext, useState } from 'react'
import styles from './LogInForm.module.css'
import Card from '../../../UI/Card'
import Form from '../../../UI/Form'
import AuthContext from '../../../context/auth-context'

const LogInForm = ({ changeForm }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const formDataHandler = (name, text) => {
    setFormData({ ...formData, [name]: text })
  }

  const { loginHandler } = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault()
    loginHandler()
  }

  const handleFormChange = () => {
    changeForm()
  }

  return (
    <Card className={styles.container}>
      <div className={styles.leftPart}>
        <div className={styles.imgcontainer}></div>
        <div className={styles.line}></div>
        <h1>Welcome to RecipeApp</h1>
      </div>
      <div className={styles.rightPart}>
        <h1>Login</h1>
        <Form
          formObject={[
            {
              key: 'emailFromLogin',
              label: 'Email',
              inputType: 'email',
              value: formData.email,
              stateKey: 'email',
              handler: formDataHandler,
            },
            {
              key: 'passwordFromLogin',
              label: 'Password',
              inputType: 'password',
              value: formData.password,
              stateKey: 'password',
              handler: formDataHandler,
            },
          ]}
          onSubmit={submitHandler}
          buttonTitle="Login"
        />
        <p>
          Don't have an Account?{' '}
          <button onClick={handleFormChange}>Sign Up</button>
        </p>
      </div>
    </Card>
  )
}
export default LogInForm
