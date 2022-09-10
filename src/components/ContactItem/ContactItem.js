import PropTypes from 'prop-types';
import { Item, ItemText, ItemData } from './ContactItem.stylad';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <Item>
    <ItemData>
      <ItemText>{name}</ItemText>
      <ItemText>{number}</ItemText>
    </ItemData>
    <button className="button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </Item>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
