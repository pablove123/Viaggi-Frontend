import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"
import Icon from '../Icon/Icon'

function ExperienceCard(props) {

  return (
    <>
      <Link className={styles.Link} to={`/experience/${props.experience._id}`}>
        <article className={styles.experienceCardContainer}>
          <img src={props.experience.photo} alt="experience"/>
          <div className={styles.nameIcon}>
            <h4 className={styles.experienceCityText}>{props.experience.name}</h4>
            <Icon className={styles.icon} category={props.experience.category} />
          </div>
        </article>
      </Link>
    </>
  )
}

export default ExperienceCard