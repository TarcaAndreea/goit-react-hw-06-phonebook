import React from 'react';
import '../ElementsList/ElementsList-module.css';
export const ElementList = ({ contact, onDeleteContact }) => {
  return (
    <li className="elements">
      {contact.name} : {contact.number}
      <button
        className="elements-button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
