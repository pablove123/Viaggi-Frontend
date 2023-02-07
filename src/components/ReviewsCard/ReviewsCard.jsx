import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ comment }) => {
  return (
    <article>
      <header>
        <AuthorInfo content={review} />
      </header>
      <p>{review.text}</p>
    </article>
  )
}

export default ReviewCard