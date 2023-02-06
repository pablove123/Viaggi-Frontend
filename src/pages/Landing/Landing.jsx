import styles from './Landing.module.css'
import Background from '../../assets/branding/background.jpg'
import Florence from '../../assets/branding/florence-link.jpg'
import Rome from '../../assets/branding/rome-link.jpg'
import Venice from '../../assets/branding/venice-link.jpg'


const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <div>< img src={Background} alt="background"/></div>
      <div>< img src={Florence} alt="florence-link"/></div>
      <div>< img src={Rome} alt="rome-link"/></div>
      <div>< img src={Venice} alt="venice-link"/></div>
    </main>
  )
}

export default Landing

