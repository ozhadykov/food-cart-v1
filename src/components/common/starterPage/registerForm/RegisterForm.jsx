import { useState } from 'react'
import Form from '../../../UI/Form'
import styles from './RegisterForm.module.css'

const RegisterForm = ({ changeForm }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleFormChange = () => {
    changeForm()
  }

  const formDataHandler = (name, text) => {
    setFormData({ ...formData, [name]: text })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    changeForm()
    console.log(formData)
  }

  const { firstname, lastname, email, password, confirmPassword } = formData

  const formObject = [
    {
      key: 'firstnameFromRegister',
      stateKey: 'firstname',
      label: 'First name',
      inputType: 'text',
      value: firstname,
      handler: formDataHandler,
    },
    {
      key: 'lastnameFromRegister',
      stateKey: 'lastname',
      label: 'Last name',
      inputType: 'text',
      value: lastname,
      handler: formDataHandler,
    },
    {
      key: 'emailFromLogin',
      stateKey: 'email',
      label: 'Email',
      inputType: 'email',
      value: email,
      handler: formDataHandler,
    },
    {
      key: 'passwordFromLogin',
      stateKey: 'password',
      label: 'Password',
      inputType: 'password',
      value: password,
      handler: formDataHandler,
    },
    {
      key: 'confirmPasswordFromLogin',
      stateKey: 'confirmPassword',
      label: 'Confirm Password',
      inputType: 'password',
      value: confirmPassword,
      handler: formDataHandler,
    },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.rightPart}>
        <h1>Sign Up</h1>
        <Form
          formObject={formObject}
          buttonTitle="Register"
          onSubmit={submitHandler}
        />
        <p>
          Have an Account? <button onClick={handleFormChange}>Login</button>
        </p>
      </div>
    </div>
  )
}
export default RegisterForm
