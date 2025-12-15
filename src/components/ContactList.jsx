import ContactItem from "./ContactItem.jsx"
import './ContactList.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  )
}

