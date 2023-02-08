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

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as expService from './services/expService'

// styles
import './App.css'
import NewExperience from './pages/NewExperience/NewExperience'
import Itinerary from './pages/Itinerary/Itinerary'
import ExperienceDetails from './pages/ExperienceDetails/ExperienceDetails'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [experiences, setExperiences] = useState([])
  // const [romeExp, setRomeExp] = useState(["test"])
  // const [veniceExp, setVeniceExp] = useState(["test"])
  // const [florenceExp, setFlorenceExp] = useState(["test"])

// const addToRome = (experience) => {
//   setRomeExp([...romeExp, experience])
// }
// const addToVenice = (experience) => {
//   setVeniceExp([...veniceExp, experience])
// }
// const addToFlorence = (experience) => {
//   setFlorenceExp([...florenceExp, experience])
// }

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
    navigate('/experiences')
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
          path="/experiences"
          element={
            <ProtectedRoute user={user}>
              <ExperienceList experiences={experiences}/>
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
        path="/itinerary"
        element={
            <ProtectedRoute user={user}>
              {/* <Itinerary romeExp={romeExp} veniceExp={veniceExp} florenceExp={florenceExp}/> */}
              <Itinerary />
            </ProtectedRoute>
          }
        />
      <Route
          path="/experiences/:experiencesId"
          element={
            <ProtectedRoute user={user}>
              <ExperienceList experiences={experiences}/>
            </ProtectedRoute>
          }
        />
          <Route
        path="/experience/:id"
        element={
            <ProtectedRoute user={user}>
              <ExperienceDetails />
            </ProtectedRoute>
          }
        />
      </Routes>


    </>
  )
}

export default App
