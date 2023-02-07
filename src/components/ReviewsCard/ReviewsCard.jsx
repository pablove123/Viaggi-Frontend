import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ review }) => {
  return (
    <article>
      <header>
      </header>
      <p>{review.content}</p>
      <p>{review.rating}</p>
      <p>{review.author.name}</p>
    </article>

        
  )
}

export default ReviewCard