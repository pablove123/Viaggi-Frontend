import { useState } from "react"
import styles from './NewExperience.module.css'

const NewExperience = (props) => {
  const [form, setForm] = useState({
    name: '',
    city: 'Venice',
    photo: '',
    category: 'Museum',
    description: '',
  })

  const [photo, setPhoto] = useState({})

const handleChange = ({ target }) => {
  setForm({ ...form, [target.name]: target.value })
}

const handleSubmit = (e) => {
  e.preventDefault()
  props.handleAddExperience(form, photo.photo)
}

const handleChangePhoto = (evt) => {
  setPhoto({ photo: evt.target.files[0] })
}

  return(
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Add A New Experience</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name: </label>
          <input
          required
          type="text"
          name="name"
          id="name-input"
          value={form.name}
          placeholder="Experience Name"
          onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city-input">City: </label>
          <select
            required
            name="city"
            id="city-input"
            value={form.city}
            onChange={handleChange}
          >
            <option value="Venice">Venice</option>
            <option value="Florence">Florence</option>
            <option value="Rome">Rome</option>
          </select>
        </div>
        <div>
          <label htmlFor="category-input">Category: </label>
          <select
            required
            name="category"
            id="category-input"
            value={form.category}
            onChange={handleChange}
          >
            <option value="Museum">Museum</option>
            <option value="Landmark">Landmark</option>
            <option value="Attraction">Attraction</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Hotel">Hotel</option>
          </select>
        </div>
        <div>
          <label htmlFor="photo-upload">Upload Photo: </label>
          <input
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
        <div className={styles.descriptionText}>
          <label htmlFor="description-input">Description:</label>
          <textarea
          required
          className={styles.textArea}
          type="text"
          name="description"
          id="description-input"
          value={form.description}
          placeholder="Add Description"
          onChange={handleChange}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewExperience