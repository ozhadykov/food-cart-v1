import FoodStorageItem from './FoodStorageItem'
import styles from './FoodStorageList.module.css'
import Card from '../UI/Card'

function FoodStorageList({ foodList }) {
  return (
    <Card className={styles.fdList}>
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
    </Card>
  )
}

export default FoodStorageList
