import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ReviewCard = ({ review }) => {
  console.log("this is the prop called review kph:", review.content)
  return (
    <article>
      <header>
      </header>
      <p>{review.content}</p>
      <p>{review.rating}</p>
      <p>{review.owner}</p>
      <h1>Hello</h1>
      {/* <AuthorInfo author={review} /> */}
    </article>

        
  )
}

export default ReviewCard