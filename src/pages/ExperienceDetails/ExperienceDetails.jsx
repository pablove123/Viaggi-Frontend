import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from './ExperienceDetails.module.css'
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import NewReview from "../../components/NewReview/NewReview";
import Reviews from "../../components/Reviews/Reviews";
// Services
import * as expService from '../../services/expService'
import * as itiService from '../../services/itiServices'

const ExperienceDetails = (props) => {
  const { id } = useParams()
  const [experience, setExperience] = useState(null)
  const [itineraryId, setItineraryId] = useState('')

  console.log("Detail ID", id)

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
    setExperience({...experience, review: [newReview, ...experience.review] })
  }

  const handleAddToItinerary = async (e) => {
    e.preventDefault()
    const updatedItinerary = await itiService.addToItinerary(itineraryId, experience._id)
    setItineraryId('')
    props.setMyIts(props.myIts.map((it) => {
      return it._id === updatedItinerary._id
        ? updatedItinerary 
        :it
    }))
  }

  const availableIts = props.myIts.filter((it) => {
    return !it.experiences.includes(experience._id)
  }) 

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

          <form onSubmit={handleAddToItinerary}>
            <p>Select your itinerary:</p>
            <select required value={itineraryId} onChange={(e) => setItineraryId(e.target.value)}>
              <option value="">Please select an itinerary</option>
              {availableIts.map((it) => (
                <option  key={it._id} value={it._id}>{it.name}</option>
              ))}
            </select>
            <button className={styles.addToItinerary} type="submit">
              Add to Itinerary
            </button>
          </form>



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
      <div className={styles.leaveReview}>
        <h1>Add Your Review</h1>
        <NewReview handleAddReview={handleAddReview}/>
      </div>
      <Reviews user={props.user} review={experience.review} />
    </main>
  )
}

export default ExperienceDetails