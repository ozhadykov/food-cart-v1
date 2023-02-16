import styles from './FoodStorageItem.module.css'

function FoodStorageItem({ title, amount }) {
  return (
    <div className={styles.fdItem}>
      <label>
        {/* Product */}
        <p>{title}</p>
      </label>
      <br />
      <label>
        {/* Amount */}
        <p>{amount} gramms</p>
      </label>
    </div>
  )
}

export default FoodStorageItem
