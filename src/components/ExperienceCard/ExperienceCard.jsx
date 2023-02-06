import styles from './ExperienceCard.module.css'
import { Link } from "react-router-dom"

const ExperienceCard = ({experience}) => {
    console.log(experience);
    return (
        <>
            <article className={styles.container}>
                <header>
                    {experience.name}
                </header>
                <p>{experience.description}</p>
            </article>
        </>
    )
}

export default ExperienceCard