import styles from './ItineraryDetails.module.css'
import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react';
import * as itiService from "../../services/itiServices"
import { useParams } from 'react-router-dom';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';

function ItineraryDetails(props) {
  const [itinerary, setItinerary] = useState()
  const { itineraryId } = useParams()

// const filterArray = (array, id) => {
//   return array.filter(itinerary => itinerary._id === id);
// }
// const filteredItinerary = filterArray(props.myIts, id)
  const location = useLocation()
// const itineraryId = location.pathname.slice(11)


  useEffect(()=>{
    const fetchItinerary = async () =>{
      const itinerariesData = await itiService.show(itineraryId)
      console.log("Data",itinerariesData)
      setItinerary(itinerariesData)
    }
    fetchItinerary()
  }, [itineraryId])
  if(!itinerary) return <div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  </div>

  return (
    <section>
      <h1>{itinerary.name}</h1>
      <h1>{itinerary.createdAt}</h1>
      {itinerary.experiences.map((experience)=>(
        <ExperienceCard key={experience._id}experience={experience}/>
      ))}
    
      
    </section>
  )
}
  
export default ItineraryDetails