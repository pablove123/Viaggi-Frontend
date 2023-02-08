import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const ExperienceCard = ({experience}) => {
    console.log(experience);

    const url = useLocation()
    const cityName = url.pathname.slice(13)
    function isCity() {
        if (cityName = 'Venice') {
            
        }
    }

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

            <button>
                Add To Itinerary
            </button>
        </>
    )
}

export default ExperienceCard