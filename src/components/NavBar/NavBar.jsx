import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../assets/branding/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  const location = useLocation()
// background: transparent;
  const publicLinks = (
    <ul>
      <li><NavLink to="/login">LOG IN</NavLink></li>
      <li><NavLink to="/signup">SIGN UP</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul>
      <li><NavLink to="/experiences">All Experiences</NavLink></li>
      <li><NavLink to="/experiences/new">New Experience</NavLink></li>
      <li><NavLink to="/itinerary">Itinerary</NavLink></li>
      <li>
        <NavLink to="/logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size='lg' />
        </NavLink>
      </li>
      {/* <li><NavLink to="/change-password">Change Password</NavLink></li> */}
      {/* <li><NavLink to="/profiles">Profiles</NavLink></li> */}
    </ul>
  )

  const navBackground = location.pathname === "/"
    ? {background: "transparent"}
    : {background: "white"}

  return (
    <nav className={styles.container} style={navBackground}>
      <NavLink to={'/'}>< img src={Logo} alt="logo"/></NavLink>
      {user ? protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
