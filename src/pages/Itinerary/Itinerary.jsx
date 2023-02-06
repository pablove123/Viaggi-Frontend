import { useState } from "react"
import ExperienceList from "../ExperienceList/ExperienceList"

function Itinerary(props) {
  
const [romeExp, setRomeExp] = useState([])
const [veniceExp, setVeniceExp] = useState([])
const [florenceExp, setFlorenceExp] = useState([])

const addToRome = (experience) => {
  setRomeExp([...romeExp, experience])
}
const addToVenice = (experience) => {
  setVeniceExp([...veniceExp, experience])
}
const addToFlorence = (experience) => {
  setFlorenceExp([...florenceExp, experience])
}

  return(
    <>
    <ExperienceList/>
    <h1>Rome</h1>
    <h1>Venice</h1>
    <h1>Florence</h1>
    </>
  )
}

export default Itinerary