import styles from './Itinerary.module.css'

function Itinerary(props) {

  return(
    <>
    <main className={styles.Container}>
        <h1>Rome</h1>
        <p>{props.romeExp}</p>
        <h1>Venice</h1>
        <p>{props.veniceExp}</p>
        <h1>Florence</h1>
        <p>{props.florenceExp}</p>
    </main>
    </>
  )
}

export default Itinerary