import styles from './ExperienceList.module.css'
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { useLocation } from 'react-router-dom';

function ExperienceList(props) {

  const url = useLocation()
  const cityName = url.pathname.slice(13)


  const filterArray = (array) => {
    return array.filter(item => item.city === cityName);
  };

  const filtered = filterArray(props.experiences)

  return (  
    <main className={styles.experienceListContainer}>
      {filtered.map((experience) => (
        <ExperienceCard key={experience._id} experience={experience} />
      ))}
    </main>
  )
}

export default ExperienceList;