import React from 'react'
import { Link } from 'react-router-dom'
import AddNewReciept from '../../Dishes/AddNewReciept'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.welcomeBlock}>
      <div className={styles.welcomeImage}>
        <div className={styles.welcomeInnerBlock}>
          <h1>Welcome to the Foodcart</h1>
          <p>
            This is my first selfmade Project about food and reciepts, here you
            can chose a dish and then you will become an instruction how to cook
            it
          </p>
        </div>
      </div>
      <div>
        <AddNewReciept />
      </div>
    </div>
  )
}

export default Home
