import styles from './ReviewsCard.module.css'

const ReviewCard = ({ review }) => {
  return (
    <main className={styles.container}>
      <div>
        <img src={review.author.photo} alt="" />
      </div>
      <div>
        <h3>{review.author.name}</h3>
        <p>{review.rating} ⭐️ Rating</p>
        <p>{review.content}</p>
      </div>
    </main>

        
  )
}

export default ReviewCard