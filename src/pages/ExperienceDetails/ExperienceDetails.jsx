import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ExperienceDetails.module.css'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import NewReview from "../../components/NewReview/NewReview";

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

  const handleAddReview = async (reviewData) => {
    const newReview = await expService.createReview(id, reviewData)
    setExperience({...experience, reviews: [...experience.reviews, newReview] })
  }


  return (
    <main className={styles.container}>
      <header>
        <img src={experience.photo} alt="" />
        <h1>{experience.name}</h1>
        <h2>{experience.city}</h2>
        <h3>{experience.category}</h3>
        <h3>{experience.description}</h3>
        {console.log(experience)}
        <span>
          {experience.author.map((author)=>(

          <AuthorInfo author={author}/>
          ))}
          </span>
        <h1>Reviewss</h1>
        <NewReview handleAddReview={handleAddReview}/>

      </header>
    </main>
  )
}

export default ExperienceDetails