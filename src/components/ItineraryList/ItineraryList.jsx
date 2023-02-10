import { Link } from "react-router-dom"
import styles from './ItineraryList.module.css'

function ItineraryList(props) {
  
    return (
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>My Itineraries</h1>
        </header>
        <div className={styles.itineraryContainer}>
        {props.myIts.map((itinerary)=>(
          <Link  className={styles.Link} key={itinerary._id} to={`/itinerary/${itinerary._id}`} myIts={props.myIts}>
            <div className={styles.itineraryContainerCard}>
              <h1>{itinerary.name}</h1>
            </div>
          </Link>
        ))}
        </div>
      </section>
    )
  }
  
  export default ItineraryList