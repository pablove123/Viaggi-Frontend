function ItineraryList(props) {
    return (
      <section>
        <h1>Itinerary List Page</h1>
        {props.myIts.map((itinerary)=>(
          <p key={itinerary._id}>{itinerary.name}</p>
        ))}
      </section>
    )
  }
  
  export default ItineraryList