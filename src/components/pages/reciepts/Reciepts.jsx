import styles from './Reciepts.module.css'
import RecieptList from '../../Dishes/RecieptList'
import Card from '../../UI/Card'

function Reciepts({ reciepts }) {
  return (
    <Card className={styles.recieptsContainer}>
      <RecieptList reciepts={reciepts} />
    </Card>
  )
}

export default Reciepts
