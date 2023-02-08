import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './ExperienceDetails.module.css'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import NewReview from "../../components/NewReview/NewReview";
import Reviews from "../../components/Reviews/Reviews";
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
    setExperience({...experience, review: [...experience.review, newReview] })
  }

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1>{experience.city}</h1>
        <h3>{experience.category}</h3>
      </div>
      <div className={styles.cardContainer}>
        <div>
          <img className={styles.detailPhoto} src={experience.photo} alt="" /> 
        </div>
        <div>
          <h1>{experience.name}</h1>
          <h3>{experience.description}</h3>
          <button>Add to Itinerary</button>
        <Link className={styles.Link} to={`/experiences/${id}/edit`} state={experience}>Update Exerience</Link>
        </div>
      </div>
      <div>
        {experience.author.map((author)=>(
        <AuthorInfo key={author._id} author={author}/>
        ))}
        <div>
        <AuthorInfo content={experience} />
          {/* {experience.author._id === props.user.profile && */}
            <div className={styles.updateDelete}>
              <button className={styles.deleteButton} onClick={() => props.handleDeleteExperience(id)}>Delete</button>
            </div>
          {/* } */}
        </div>
      </div>
      <h1>Reviews</h1>
      <NewReview handleAddReview={handleAddReview}/>
      <Reviews review={experience.review} user={props.user} />
    </main>
  )
}

export default ExperienceDetails