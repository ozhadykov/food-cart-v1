import styles from './Reciepts.module.css'
import RecieptList from '../../Dishes/RecieptList'

function Reciepts({ reciepts }) {
  return (
    <div className={styles.recieptsContainer}>
      <RecieptList reciepts={reciepts} />
    </div>
  )
}

export default Reciepts
