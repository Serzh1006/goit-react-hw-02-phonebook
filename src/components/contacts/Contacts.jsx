// import PropTypes from 'prop-types';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
};

export default Contacts;
