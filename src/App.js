import { useEffect, useState } from "react"
import ContactForm from "./components/ContactForm.jsx"
import ContactList from "./components/ContactList.jsx"
import './App.css';


export default function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log("Список контактов обновлён")
  }, [contacts])

  const addContact = (contact) => {
    setContacts((prev) => [{ ...contact, id: crypto.randomUUID() }, ...prev])
    console.log("Контакт добавлен:", contact.name)
  }

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id))
    console.log("Контакт удалён:", id)
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Контакт-менеджер</h1>
          <p className="app-subtitle">Final Final Final</p>
        </header>

        <div className="app-grid">
          <section className="app-card app-card--form">
            <h2 className="app-card-title">Добавить контакт</h2>
            <ContactForm onAdd={addContact} />
          </section>

          <section className="app-card app-card--list">
            <h2 className="app-card-title">Список контактов</h2>

            {contacts.length === 0 ? (
              <div className="app-empty">Список контактов пуст</div>
            ) : (
              <ContactList contacts={contacts} onDelete={deleteContact} />
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
