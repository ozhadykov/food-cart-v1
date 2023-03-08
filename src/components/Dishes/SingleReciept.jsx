import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import data from '../Data/data'
import styles from './SingleReciept.module.css'
import Card from '../UI/Card'

const SingleReciept = () => {
  const params = useParams()
  const navigate = useNavigate()
  const reciept = data.find((rec) => rec.slug === params.slug)

  useEffect(() => {
    if (!reciept) navigate('..', { relative: 'path' })
  }, [reciept, navigate])

  return (
    <Card className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>{reciept.title}</h1>
      </div>
      <div className={styles.imgContainer}>
        <img src={reciept.imgLink} alt="" />
      </div>
      <div className={styles.foodListContainer}>
        <h3>Food list:</h3>
        {reciept.foodList.map((foodItem) => {
          return (
            <div key={Math.floor(Math.random() * 100)}>
              {foodItem.name} {foodItem.amount}
            </div>
          )
        })}
      </div>
      <div className={styles.instructionContainer}>
        <p>{reciept.instruction}</p>
      </div>
    </Card>
  )
}
export default SingleReciept
