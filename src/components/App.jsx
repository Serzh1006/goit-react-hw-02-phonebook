import React, { Component } from 'react';
import Contacts from './contacts';
import PhoneBook from './phonebook';
import Filter from './filter';
import css from './app.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filterByName = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = newContact => {
    const findName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );
    if (findName !== undefined) {
      alert(`${findName.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );

    return (
      <div>
        <h2 className={css.phoneBook}>Phonebook</h2>
        <PhoneBook createContact={this.addContact} />
        <h2 className={css.contacts}>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.filterByName} />
        {contacts.length !== 0 && (
          <Contacts
            contacts={filterContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}
