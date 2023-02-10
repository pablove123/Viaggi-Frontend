import styles from './LandingCard.module.css'
import { Link } from 'react-router-dom';

function LandingCard(props) {
  return ( 
    <>
      <Link className={styles.cityLink} to={`experiences/${props.cityName}`}>
        <div className={styles.cardContainer}>
          {/* <div className={styles.imageDiv}> */}
            <img src={props.imgsrc} alt={props.alt} />
          {/* </div> */}
          <div className={styles.cardTextDiv}>
            <h4>{props.cityName}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}

export default LandingCard;

