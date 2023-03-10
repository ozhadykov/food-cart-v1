import styles from './Header.module.css'
import { NavBar } from '../../common'

function Header() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  )
}

export default Header
