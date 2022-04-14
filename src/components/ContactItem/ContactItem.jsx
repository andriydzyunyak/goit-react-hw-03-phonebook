import PropTypes from 'prop-types';
import {
  Contact,
  ContactDeleteButton,
  ContactNumber,
} from 'components/ContactItem/ContactItem.styled';

export const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <Contact key={id}>
      {name.toLowerCase()}:<ContactNumber>{number}</ContactNumber>
      <ContactDeleteButton type="button" onClick={() => onDelete(id)}>
        Delete
      </ContactDeleteButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
