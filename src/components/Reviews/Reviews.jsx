import ReviewCard from "../ReviewsCard/ReviewsCard"

const Reviews = (props) => {
    console.log("value of props in reviews in the Review component", props)
  if (!props.review) return <h4>No Reviews</h4>

  return (
    <>
      {props.review.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
          user={props.user}
        />
      ))}
    </>
  )
}

export default Reviews