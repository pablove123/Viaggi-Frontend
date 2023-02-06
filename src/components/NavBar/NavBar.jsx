import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/experiences">All Experiences</NavLink></li>
      <li><NavLink to="/new-experience">New Experience</NavLink></li>
      <li><NavLink to="/change-password">Change Password</NavLink></li>
      <li><NavLink to="/profiles">Profiles</NavLink></li>
      <li><NavLink to="/itinerary">Itinerary</NavLink></li>
      <li><NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
    </ul>
  )
  return (
    <nav className={styles.container}>
      <NavLink to={'/'}>Home Page</NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
