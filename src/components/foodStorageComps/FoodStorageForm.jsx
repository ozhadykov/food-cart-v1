import { useState } from 'react'
import styles from './FoodStorageForm.module.css'

function FoodStorageForm({ addFood }) {
  const [input, setInput] = useState({
    title: '',
    amount: 0,
  })

  const inputHandler = (text, name) => {
    setInput((input) => {
      return { ...input, [name]: text }
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    addFood(input)
    setInput({
      title: '',
      amount: 0,
    })
  }

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <h1>Add Food</h1>
        <div className={styles.inputElement}>
          <label>Product</label>
          <input
            type="text"
            value={input.title}
            onChange={(e) => inputHandler(e.target.value, 'title')}
          />
        </div>
        <div className={styles.inputElement}>
          <label>Amount (gramms)</label>
          <input
            type="number"
            value={input.amount}
            onChange={(e) => inputHandler(e.target.value, 'amount')}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default FoodStorageForm
