import React, { useState } from 'react';
import '../Contactform/contactForm-module.css';
export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact(name, number);
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
