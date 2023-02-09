import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import styles from './ItineraryDetails.module.css'
import { useLocation } from "react-router-dom"

function ItineraryDetails(props) {
  console.log("this is props", props.myIts)
  
  
  const filterArray = (array, id) => {
    return array.filter(itinerary => itinerary._id === id);
  }
  
  const location = useLocation()
  const id = location.pathname.slice(15)

  const filteredItinerary = filterArray(props.myIts, id);


    return (
      <section>
        {filteredItinerary.map((itinerary) => (
          <>
          <h1>Name: {itinerary.name}</h1>
          <h1>Created At: {itinerary.createdAt}</h1>
          </>
      ))}
        
      </section>
    )
  }
  
  export default ItineraryDetails