import ItineraryDetails from "../../pages/ItineraryDetails/ItineraryDetails"
import ExperienceCard from "../ExperienceCard/ExperienceCard"

function ItineraryMap(props) {
  console.log("this is props itinerary experiences", props.itinerary.experiences)
  return (
<>

<section>
    {props.itinerary.experiences.map((experience) => {
    
            <ExperienceCard experience={experience} />
    })}
</section>
</>
  )

}
export default ItineraryMap

