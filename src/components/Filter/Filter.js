import PropTypes from 'prop-types';
import { FilterLabel } from './Filter.styled';
import { FilteInput } from './Filter.styled';

const styles = {
  text: {
    flexShrink: 0,
  },
};

const Filter = ({ value, onChange }) => (
  <label className="label">
    <span style={styles.text}>Find contacts by name</span>
    <input
      className="input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Name contact"
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
