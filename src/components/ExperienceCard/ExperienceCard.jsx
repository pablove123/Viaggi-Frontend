import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"

const ExperienceCard = ({experience}) => {
    console.log(experience);
    return (
        <>
            <article className={styles.container}>
                <Link to={`/experiences/${experience._id}`}>
                    <header>
                        {experience.name}
                    </header>
                </Link>
                <p>{experience.description}</p>
            </article>
        </>
    )
}

export default ExperienceCard