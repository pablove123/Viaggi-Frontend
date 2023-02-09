import ReviewCard from "../ReviewsCard/ReviewsCard"

function Reviews(props) {
  if (!props.review) return <h4>No Reviews Yet</h4>

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