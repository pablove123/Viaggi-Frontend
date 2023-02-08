import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"

const ExperienceCard = ({experience}) => {
    return (
        <>
            <Link to={`/experience/${experience._id}`}>
                <div className={styles.experienceCardContainer}>
                    <img src={experience.photo} alt="experience"/>
                    <div className={styles.experienceCardTextDiv}>
                        <h4 className={styles.experienceCityText}>{experience.name}</h4>
                        <h4 className={styles.experienceCityText}>{experience.category}</h4>
                        
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ExperienceCard