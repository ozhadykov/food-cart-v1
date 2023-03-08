import styles from './About.module.css'
import Card from '../../UI/Card'

function About() {
  return (
    <Card className={styles.aboutContainer}>
      {/* <h1>Hey There!</h1>
      <p>This is my dishes app</p> */}
      <div className={styles.imgContainer}></div>
      <div className={styles.textContainer}>
        <h1>Why i made this App?</h1>
        <h2>The reason is: </h2>
        <p>
          I want to be a React developer, and then
          <br />
          learn Node Js and other languages,
          <br />
          because i am so excited about programming. <br />
          <br />
          I like to code so much, i would say,
          <br />
          this is my passion, so if you see this project,
          <br />
          it means that i have learned a lot and now
          <br />
          i want to be an employee in your company.
          <br />
          <br />
          Pss.. Check my other projects, i think i have developed myself)
        </p>
      </div>
    </Card>
  )
}

export default About
