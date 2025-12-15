import './ContactItem.css';

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className="contact-item">
      <div className="contact-item-main">
        <div className="contact-item-name">{contact.name}</div>
        <div className="contact-item-meta">
          <span className="contact-item-pill">{contact.phone}</span>
          <span className="contact-item-pill contact-item-pill--email">{contact.email}</span>
        </div>
      </div>

      <button className="contact-item-delete" type="button" onClick={() => onDelete(contact.id)}>
        Удалить
      </button>
    </li>
  )
}