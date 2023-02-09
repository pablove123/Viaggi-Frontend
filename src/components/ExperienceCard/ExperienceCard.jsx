import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"

const ExperienceCard = (props) => {

    return (
        <>
            <Link to={`/experience/${props.experience._id}`}>
                <div className={styles.experienceCardContainer}>
                    <img src={props.experience.photo} alt="experience"/>
                    <div className={styles.experienceCardTextDiv}>
                        <h4 className={styles.experienceCityText}>{props.experience.name}</h4>
                        <h4 className={styles.experienceCityText}>{props.experience.category}</h4>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ExperienceCard