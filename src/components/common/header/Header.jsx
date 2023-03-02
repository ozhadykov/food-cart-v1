import styles from './Header.module.css'
import { NavBar } from '../../common'

function Header({ logoutHandler }) {
  return (
    <header className={styles.header}>
      <NavBar logoutHandler={logoutHandler} />
    </header>
  )
}

export default Header
