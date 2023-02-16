import styles from './Reciept.module.css'
import { Link } from 'react-router-dom'

function Reciept(props) {
  return (
    <div className={styles.recieptContainer}>
      <div className={styles.imgContainer}>
        <img src={props.imgLink} alt="" />
      </div>
      <div className={styles.textContainer}>
        <Link to={props.slug}>
          <h1>{props.title}</h1>
        </Link>
        <p>{props.instruction.slice(0, 300)}</p>
      </div>
    </div>
  )
}

export default Reciept
