import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={s.contactList}>
      <ContactItem contacts={contacts} onDelete={onDelete} />;
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
