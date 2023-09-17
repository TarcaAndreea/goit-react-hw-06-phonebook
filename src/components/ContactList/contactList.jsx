import React from 'react';
import { ElementList } from 'components/ElementsList/ElementList';
import '../ContactList/contactList-module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/ContactSlice';
import { getFilter, getContacts } from 'Redux/selectors';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contacts">
      {contacts.map(contact => (
        <ElementList
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};
