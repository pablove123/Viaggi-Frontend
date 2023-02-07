import styles from './LandingCard.module.css'
import { Link } from 'react-router-dom';

const LandingCard = (props) => {
  return ( 
    <>
    <Link to='/experiences'>
      <div className={styles.cardContainer}>
        <img src={props.imgsrc} alt={props.alt}/>
        <div className={styles.cardTextDiv}>
          <h4>{props.cityName}</h4>
        </div>
      </div>
    </Link>
    </>
  );
}

export default LandingCard;

