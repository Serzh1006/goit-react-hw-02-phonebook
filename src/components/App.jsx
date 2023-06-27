import React, { Component, useLayoutEffect } from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Contacts from './contacts';
// import PhoneBook from './phonebook';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  getValue = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    const { name } = this.state;
    const newID = nanoid();
    const newContact = {
      id: newID,
      name: name,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    this.setState({ name: '' });
  };

  render() {
    const idInput = nanoid();
    return (
      <div>
        {/* <PhoneBook
          name={this.state.name}
          getValue={this.getValue}
          addContact={this.addContact}
        />
        <Contacts /> */}

        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.addContact}>
            <label htmlFor={idInput}>Name</label>
            <input
              id={idInput}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.getValue}
            />
            <button type="submit">Add Contact</button>
          </form>
        </div>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}
