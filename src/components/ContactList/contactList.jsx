import React from 'react';
import { ElementList } from 'components/ElementsList/ElementList';
import '../ContactList/contactList-module.css';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contacts">
      {contacts.map(contact => (
        <ElementList
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
