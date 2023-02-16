import FoodStorageItem from './FoodStorageItem'
import styles from './FoodStorageList.module.css'

function FoodStorageList({ foodList }) {
  return (
    <div className={styles.fdList}>
      {foodList.length === 0 ? (
        <div className={styles.fdListEmpty}>
          <h1>Your Storage is empty :(</h1>
        </div>
      ) : (
        foodList.map((foodItem) => {
          return (
            <FoodStorageItem
              key={foodItem.id}
              title={foodItem.title}
              amount={foodItem.amount}
            />
          )
        })
      )}
    </div>
  )
}

export default FoodStorageList
