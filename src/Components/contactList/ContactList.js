import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul className={styles.contactsList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={styles.contact}>
          {contact.name}: {contact.number}
          <button
            className={styles.deleteBtn}
            type="button"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
