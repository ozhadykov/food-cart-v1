import styles from './FoodStorgae.module.css'
import FoodStorageForm from '../../foodStorageComps/FoodStorageForm'
import FoodStorageList from '../../foodStorageComps/FoodStorageList'

function FoodStorage({ addFood, foodList }) {
  return (
    <div className={styles.foodStorageContainer}>
      <FoodStorageForm addFood={addFood} />
      <FoodStorageList foodList={foodList} />
    </div>
  )
}

export default FoodStorage
