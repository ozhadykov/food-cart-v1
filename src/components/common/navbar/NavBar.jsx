import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/reciepts">Reciepts</Link>
        <Link to="/foodstorage">Food Storage</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/">Login</Link>
      </div>
    </div>
  )
}

export default NavBar
