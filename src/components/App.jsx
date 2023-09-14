import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './Contactform/contactForm';
import { ContactList } from './ContactList/contactList';
import { Filter } from './Filter/filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      alert(`${name} already exists in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1 style={{ paddingLeft: '30px', fontSize: '40px' }}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 style={{ paddingLeft: '30px', fontSize: '40px' }}>Contacts</h2>
      <Filter onChangeFilter={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
