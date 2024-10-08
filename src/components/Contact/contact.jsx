import { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact.scss'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    let formErrors = {}
    if (!formData.name) formErrors.name = 'Le nom est requis'
    if (!formData.email) formErrors.email = "L'email est requis"
    if (!formData.message) formErrors.message = 'Le message est requis'
    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }

      emailjs
        .send(
          'service_5msn4n9',
          'template_m0x2y2w',
          templateParams,
          'Zyrz4TxDFhS_-4flC'
        )
        .then(
          (result) => {
            console.log(result.text)
            setSuccessMessage('Message envoyé !')
            setFormData({ name: '', email: '', message: '' })
            setErrorMessage('')
          },
          (error) => {
            console.log(error.text)
            setErrorMessage("Une erreur s'est produite, veuillez réessayer.")
          }
        )
    }
  }

  return (
    <section className="sectionContact">
      <div className="contactContainer" id="contact">
        <h2>Contactez-moi !</h2>
        <form onSubmit={handleSubmit}>
          <div className="formContainer">
            <label>Nom:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="name"
              aria-label="name"
            />
            {errors.name && <span>{errors.name}</span>}
          </div>
          <div className="formContainer">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="email"
              aria-label="email"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div className="formContainer">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="message"
              aria-label="message"
            />
            {errors.message && <span>{errors.message}</span>}
          </div>
          <button type="submit">Send</button>
          {successMessage && <p className="successMsg">{successMessage}</p>}
          {errorMessage && <p className="errorMsg">{errorMessage}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
