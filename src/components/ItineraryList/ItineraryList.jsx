import { Link } from "react-router-dom"

function ItineraryList(props) {
  
    return (
      <section>
        <h1>Itinerary List Page</h1>
        {props.myIts.map((itinerary)=>(
          <Link key={itinerary._id} to={`/itinerary/${itinerary._id}`} myIts={props.myIts}><p>{itinerary.name}</p></Link>
        ))}
      </section>
    )
  }
  
  export default ItineraryList