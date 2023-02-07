import styles from './LandingCard.module.css'
import { Link } from 'react-router-dom';

const LandingCard = (props) => {
  return ( 
    <>
    <Link to={`experiences/${props.cityName}`}>
      <div className={styles.cardContainer}>
        <img src={props.imgsrc} alt={props.alt}/>
        <div className={styles.cardTextDiv}>
          <h4 className={styles.cityText}>{props.cityName}</h4>
        </div>
      </div>
    </Link>
    </>
  );
}

export default LandingCard;

