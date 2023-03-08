import styles from './FoodStorgae.module.css'
import FoodStorageForm from '../../foodStorageComps/FoodStorageForm'
import FoodStorageList from '../../foodStorageComps/FoodStorageList'
import Card from '../../UI/Card'

function FoodStorage({ addFood, foodList }) {
  return (
    <Card className={styles.foodStorageContainer}>
      <FoodStorageForm addFood={addFood} />
      <FoodStorageList foodList={foodList} />
    </Card>
  )
}

export default FoodStorage
