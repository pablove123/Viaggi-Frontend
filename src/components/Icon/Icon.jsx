import styles from './Icon.module.css'

import Hotel from '../../assets/icons/hotel.png'
import Museum from '../../assets/icons/museum.png'
import Landmark from '../../assets/icons/landmark.png'
import Attraction from '../../assets/icons/attraction.png'
import Restaurant from '../../assets/icons/restaurant.png'

const Icon = ({ category }) => {
  const icons = {
    Hotel,
    Museum,
    Landmark,
    Attraction,
    Restaurant,
  }
    return (
      <img className={styles.icon} src={icons[category]} alt={`A ${category} icon.`} />
    )
  }
  
  export default Icon