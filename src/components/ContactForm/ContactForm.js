import { FormLable } from './ContactForm.stylad';
import { FormButton } from './ContactForm.stylad';
import { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addContactOnSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };
  const handleChangeNumber = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className="form" onSubmit={addContactOnSubmit}>
      <label className="label">
        <span>Name:</span>
        <input
          className="input"
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className="label">
        <span>Tel:</span>
        <input
          className="input"
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
