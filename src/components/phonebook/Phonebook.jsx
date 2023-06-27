import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const PhoneBook = e => {
  const idInput = nanoid();
  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={this.props.addContact}>
        <label htmlFor={idInput}>Name</label>
        <input
          id={idInput}
          type="text"
          name="name"
          value={this.props.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.getValue}
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default PhoneBook;
