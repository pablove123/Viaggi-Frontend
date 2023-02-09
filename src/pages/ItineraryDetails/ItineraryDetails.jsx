import styles from './ItineraryDetails.module.css'
import { useLocation } from "react-router-dom"

function ItineraryDetails(props) {
  
  
  const filterArray = (array, id) => {
    return array.filter(itinerary => itinerary._id === id);
  }
  
  const location = useLocation()
  const id = location.pathname.slice(15)

  const filteredItinerary = filterArray(props.myIts, id);


    return (
      <section>
        {filteredItinerary.map((itinerary) => (
          <div key={itinerary._id}>
            <h1>Name: {itinerary.name}</h1>
            <h1>Created At: {itinerary.createdAt}</h1>
          </div>
      ))}
        
      </section>
    )
  }
  
  export default ItineraryDetails