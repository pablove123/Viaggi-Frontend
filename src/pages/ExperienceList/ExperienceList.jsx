import styles from './ExperienceList.module.css'
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

function ExperienceList(props) {
  return (  
    <main className={styles.container}>
      {props.experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
      ))}
    </main>
  )
}

export default ExperienceList;