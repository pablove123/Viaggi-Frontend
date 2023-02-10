import styles from './NewItinerary.module.css'
import { useState} from 'react'
import * as itiService from "../../services/itiServices"
import ItineraryList from '../../components/ItineraryList/ItineraryList'

function NewItinerary(props) {
  const [itName, setItName] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = {name: itName}
    const newItinerary = await itiService.create(form)
    console.log(newItinerary)
    setItName("")
    props.setMyIts([...props.myIts, newItinerary])
  }

  return(
    <main className={styles.container}>
        <h1>New Itinerary</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            value={itName}
            placeholder="Itinerary name"
            onChange={(e)=>setItName(e.target.value)}
          />
          <button type="submit">Create Itinerary</button>
        </form>
        <ItineraryList myIts={props.myIts}/>
    </main>
  )
}

export default NewItinerary