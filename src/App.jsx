// npm modules
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ExperienceList from './pages/ExperienceList/ExperienceList'
import EditExperience from './pages/EditExperience/EditExperience'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as expService from './services/expService'
import * as profileService from "./services/profileService"

// styles
import './App.css'
import NewExperience from './pages/NewExperience/NewExperience'
import NewItinerary from './pages/Itinerary/NewItinerary'
import ExperienceDetails from './pages/ExperienceDetails/ExperienceDetails'
import ItineraryDetails from './pages/ItineraryDetails/ItineraryDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [experiences, setExperiences] = useState([])
  const [myIts, setMyIts] = useState([]) 

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllExperiences = async () => {
      const data = await expService.getAllExperiences()
      setExperiences(data)
    } 
    if (user) fetchAllExperiences()
  }, [user])

  useEffect(()=>{
    const fetchProfile = async () =>{
      const profileData = await profileService.getMyProfile()
      setMyIts(profileData.itineraries)
    }
    if (user)fetchProfile()
  }, [user])

  const expPhotoHelper = async (photo, id) => {
    const photoData = new FormData()
    photoData.append('photo', photo)
    return await expService.addPhoto(photoData, id)
  }

  const handleAddExperience = async (experienceData, photo) => {
    const newExperience = await expService.create(experienceData)
    if(photo){
      newExperience.photo = await expPhotoHelper(photo, newExperience._id)
    }
    setExperiences([newExperience, ...experiences])
    navigate(`/experience/${newExperience._id}`)
  }

  const handleUpdateExperience = async (experienceData) => {
    const updatedExperience = await expService.update(experienceData)
    setExperiences(experiences.map((b) => experienceData._id === b._id ? updatedExperience : b))
    navigate(`/experience/${experienceData._id}`)
  }

  const handleDeleteExperience = async (id) => {
    const deletedExperience = await expService.deleteExperience(id)
    setExperiences(experiences.filter(b => b._id !== deletedExperience._id))
    navigate('/')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/experiences/new"
          element={
            <ProtectedRoute user={user}>
              <NewExperience handleAddExperience={handleAddExperience} />
            </ProtectedRoute>
          }
        />        
          <Route
        path="/itinerary/new"
        element={
          <ProtectedRoute user={user}>
            <NewItinerary
              myIts={myIts}
              setMyIts={setMyIts}
            />
          </ProtectedRoute>
        }
        />
          <Route
        path="/itinerary/:itineraryId"
        element={
            <ProtectedRoute user={user}>
              <ItineraryDetails
                myIts={myIts}
                setMyIts={setMyIts}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/experiences/:experiencesId"
          element={
            <ExperienceList experiences={experiences}/>
          }
        />
          <Route
        path="/experience/:id"
        element={
          <ProtectedRoute user={user}>
            <ExperienceDetails setMyIts={setMyIts} myIts={myIts} user={user} handleDeleteExperience={handleDeleteExperience}/>
          </ProtectedRoute>
        }
        />
        <Route path="/experiences/:id/edit" element={
          <ProtectedRoute user={user}>
          <EditExperience handleUpdateExperience={handleUpdateExperience} />
          </ProtectedRoute>
        } />

      </Routes>
    </>
  )
}

export default App
