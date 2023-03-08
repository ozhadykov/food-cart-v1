import styles from './Footer.module.css'
import { BiCopyright } from 'react-icons/bi'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <BiCopyright className={styles.svg} />
      </div>
      <div className={styles.name}>
        <p>Made by Omar Zhadykov</p>
        <p>2023</p>
      </div>
    </footer>
  )
}

export default Footer
