import { Link } from "react-router-dom"
import styles from './ItineraryList.module.css'

function ItineraryList(props) {
  
    return (
      <section className={styles.container}>
        <h1>My Itineraries</h1>
        {props.myIts.map((itinerary)=>(
          <Link key={itinerary._id} to={`/itinerary/${itinerary._id}`} myIts={props.myIts}><p>{itinerary.name}</p></Link>
        ))}
      </section>
    )
  }
  
  export default ItineraryList