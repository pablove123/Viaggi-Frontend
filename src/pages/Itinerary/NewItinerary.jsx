import styles from './Itinerary.module.css'
import { useState, useEffect } from 'react'
import * as itiService from "../../services/itiServices"
import { useNavigate } from 'react-router-dom'
import ItineraryList from '../../components/ItineraryList/ItineraryList'
import * as profileService from "../../services/profileService"

function NewItinerary(props) {
  const [itName, setItName] = useState("")
  const [myIts, setMyIts] = useState([]) 
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchProfile = async () =>{
      const profileData = await profileService.getMyProfile()
      console.log(profileData)
      setMyIts(profileData.itineraries)
    }
    fetchProfile()
  }, [])
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = {name: itName}
    const newItinerary = await itiService.create(form)
    console.log(newItinerary)
    setItName("")
  }


  return(
    <main className={styles.Container}>
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
        <ItineraryList myIts={myIts}/>
    </main>
  )
}

export default NewItinerary