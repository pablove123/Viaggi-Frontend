import { useState } from "react"
import styles from './NewReview.module.css'

// Components
import Icon from "../Icon/Icon"

const NewReview = (props) => {
  const [form, setForm] = useState({ text: '' })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(form)
    setForm({ text: '' })
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
      <button type="submit"><Icon category="Create" /></button>
    </form>
  )
}

export default NewReview