import styles from './FoodStorageItem.module.css'
import Card from '../UI/Card'

function FoodStorageItem({ title, amount }) {
  return (
    <Card className={styles.fdItem}>
      <label>
        {/* Product */}
        <p>{title}</p>
      </label>
      <br />
      <label>
        {/* Amount */}
        <p>{amount} gramms</p>
      </label>
    </Card>
  )
}

export default FoodStorageItem
