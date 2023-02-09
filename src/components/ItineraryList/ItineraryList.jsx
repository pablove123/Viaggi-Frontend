import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

function ItineraryList(props) {
  const { id } = useParams()
  console.log("this is props", props)

  // useEffect(() => {
  //   const fetchExperience = async () => {
  //     const data = await expService.show(id)
  //     setExperience(data)
  //   }
  //   fetchExperience()
  // }, [id])
  
    return (
      <section>
        <h1>Itinerary List Page</h1>
        {props.myIts.map((itinerary)=>(
          //  <p key={itinerary._id}>{itinerary.name}</p>
          <Link to={`${itinerary._id}`} myIts={props.myIts}><p key={itinerary._id}>{itinerary.name}</p></Link>
        ))}
      </section>
    )
  }
  
  export default ItineraryList