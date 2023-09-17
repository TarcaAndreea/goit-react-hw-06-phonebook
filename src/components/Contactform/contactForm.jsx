import React, { useState } from 'react';
import '../Contactform/contactForm-module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/ContactSlice';

import { nanoid } from '@reduxjs/toolkit';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      alert(`${name} already exists in contacts!`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        Name
        <input
          className="form-input"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label className="form-label">
        Number
        <input
          className="form-input"
          type="tel"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </label>
      <button className="form-button" type="submit">
        Add Contact
      </button>
    </form>
  );
};
