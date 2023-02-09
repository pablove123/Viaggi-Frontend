import styles from './ReviewsCard.module.css'

const ReviewCard = ({ review }) => {
  return (
    <main className={styles.container}>
      <p>{review.author.name}</p>
      <img src={review.author.photo} alt="" />
      <p>{review.rating} ⭐️ Rating</p>
      <p>{review.content}</p>
    </main>

        
  )
}

export default ReviewCard