

const ReviewCard = ({ review }) => {
  return (
    <article>
      <header>
      </header>
      <p>{review.author.name}</p>
      <p>{review.rating}</p>
      <p>{review.content}</p>
    </article>

        
  )
}

export default ReviewCard