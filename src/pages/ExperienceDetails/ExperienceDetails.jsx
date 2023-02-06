import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ExperienceDetails.module.css'

// Services
import * as expService from '../../services/expService'

const ExperienceDetails = (props) => {
  const { id } = useParams()
  const [experience, setExperience] = useState(null)

  useEffect(() => {
    const fetchExperience = async () => {
      const data = await expService.show(id)
      setExperience(data)
    }
    fetchExperience()
  }, [id])

  if (!experience) return <h1>Loading...</h1>

  return (
    <main className={styles.container}>
      <header>
        <h1>{experience.name}</h1>
        <h2>{experience.city}</h2>
        <h3>{experience.category}</h3>
        <h3>{experience.description}</h3>
      </header>
    </main>
  )
}

export default ExperienceDetails