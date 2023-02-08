import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const ExperienceCard = (props) => {
    console.log(props)
    const url = useLocation()
    const cityName = url.pathname.slice(13)

    const isVenice = (
        <button onClick={() => props.addToVenice}>Add to Itinerary</button>
      )
    const isRome = (
        <button onClick={() => props.addToRome}>Add to Itinerary</button>
      )
    const isFlorence = (
        <button onClick={() => props.addToFlorence}>Add to Itinerary</button>
      )

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
            <div>
            {cityName==="Rome" ? isRome : null}
            {cityName==="Venice" ? isVenice : null}
            {cityName==="Florence" ? isFlorence : null}
            </div>
        </>
    )
}

export default ExperienceCard