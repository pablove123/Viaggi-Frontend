import styles from './Landing.module.css'
import Background from '../../assets/branding/background.jpg'
import Florence from '../../assets/branding/florence-link.jpg'
import Rome from '../../assets/branding/rome-link.jpg'
import Venice from '../../assets/branding/venice-link.jpg'
import LandingCard from '../../components/LandingCard/LandingCard'


const Landing = ({ user }) => {
  return (
    <main className={styles.landingMain}>
      <div className={styles.heroDiv}>
        <h1 className={styles.welcome}>Welcome to Italy</h1>
        <h3 className={styles.where}>Where would you like to go?</h3>
      </div>
      <div className={styles.landingContainer}>
        <LandingCard imgsrc={Venice} alt ={'picture of venice'} cityName={'Venice'} />
        <LandingCard imgsrc={Florence} alt ={'picture of florence'} cityName={'Florence'} />
        <LandingCard imgsrc={Rome} alt ={'picture of rome'} cityName={'Rome'} />
      </div>
      {/* <div>< img src={Background} alt="background"/></div> */}
    </main>
  )
}

export default Landing

