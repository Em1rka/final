import { useState } from "react"
import './ContactForm.css';
export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedPhone = phone.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedPhone || !trimmedEmail) return

    onAdd({ name: trimmedName, phone: trimmedPhone, email: trimmedEmail })
    setName("")
    setPhone("")
    setEmail("")
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="contact-form-field">
        <span className="contact-form-label">Имя</span>
        <input
          className="contact-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Например: Актан"
        />
      </label>

      <label className="contact-form-field">
        <span className="contact-form-label">Телефон</span>
        <input
          className="contact-form-input"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Например: +996 996 996 996"
        />
      </label>

      <label className="contact-form-field">
        <span className="contact-form-label">Email</span>
        <input
          className="contact-form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Например: Akula@auca.kg" 
        />
      </label>

      <button className="contact-form-btn" type="submit">
        Добавить
      </button>
    </form>
  )
}