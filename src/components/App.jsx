import React from 'react';
import { Filter } from './Filter/filter';
import { ContactForm } from './Contactform/contactForm';
import { ContactList } from './ContactList/contactList';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'Redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={{ paddingLeft: '30px', fontSize: '40px' }}>Phonebook</h1>
          <ContactForm />
          <h2 style={{ paddingLeft: '30px', fontSize: '40px' }}>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};
