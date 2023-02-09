import { useState } from "react"
import styles from './NewReview.module.css'

function NewReview(props) {
  const [form, setForm] = useState({ content: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(form)
    setForm({ content: '' })
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <textarea
        required
        type="text"
        name="content"
        id="text-input"
        value={form.content}
        placeholder="Add a Review"
        onChange={handleChange}
      />
      <label htmlFor="rating-input">Rating</label>
        <select
          required
          name="rating"
          id="rating-input"
          value={form.rating}
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      <button type="submit">Submit Review</button>
    </form>
  )
}

export default NewReview
