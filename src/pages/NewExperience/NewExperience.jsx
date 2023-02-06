import { useState } from "react"
import styles from './NewExperience.module.css'

const NewExperience = (props) => {
  const [form, setForm] = useState({
    name: '',
    photo: '',
    category: '',
    description: '',
  })

const handleChange = ({ target }) => {
  setForm({ ...form, [target.name]: target.value })
}

const handleSubmit = (e) => {
  e.preventDefault()
  props.handleAddExperience(form)
}

  return(
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name</label>
      <input
      required
      type="text"
      name="name"
      id="name-input"
      value={form.name}
      placeholder="Experience Name"
      onChange={handleChange}
      />
      <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewExperience