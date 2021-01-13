import PropTypes, { shape } from 'prop-types';
import s from './ContactListItem.module.css';
const ContactItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, phone }) => {
    return (
      <li key={id} className={s.contactItem}>
        {name}: {phone}{' '}
        <button
          className={s.deleteButton}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactItem;
