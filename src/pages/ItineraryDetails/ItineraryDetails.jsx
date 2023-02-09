import styles from './ItineraryDetails.module.css'
import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';
import * as itiService from "../../services/itiServices"
import { useParams } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

function ItineraryDetails(props) {
  const [itinerary, setItinerary] = useState()
  const { itineraryId } = useParams()

  useEffect(()=>{
    const fetchItinerary = async () =>{
      const itinerariesData = await itiService.show(itineraryId)
      setItinerary(itinerariesData)
    }
    fetchItinerary()
  }, [itineraryId])
  if(!itinerary) return <h1>Loading...</h1>

  return (
    <section className={styles.container}>
      <header>
        <h1>{itinerary.name}</h1> 
      </header>
      <div>
        {itinerary.experiences.map((experience)=>(
          <ExperienceCard key={experience._id}experience={experience}/>
        ))}
      </div>
    
      
    </section>
  )
}
  
export default ItineraryDetails