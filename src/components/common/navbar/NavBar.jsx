import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../context/auth-context'

function NavBar() {
  const { logoutHandler } = useContext(AuthContext)

  return (
    <div className={styles.navbar}>
      <div>
        <Link to="/">Home</Link>
        <Link to="/reciepts">Reciepts</Link>
        <Link to="/foodstorage">Food Storage</Link>
        <Link to="/about">About</Link>
      </div>
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
