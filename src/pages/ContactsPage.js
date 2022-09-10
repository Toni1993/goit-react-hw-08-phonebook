import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from 'components/Box';
import { useEffect } from 'react';
import { Puff } from 'react-loader-spinner';

import { useDispatch, useSelector } from 'react-redux/';
import {
  getContacts,
  changeFilter,
  isLoading,
  getFilterContacts,
} from '../redux/contacts/contactsSlice';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from 'redux/contacts/contactsOperation';

function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterContacts);
  const isLoadingContacts = useSelector(isLoading);
  const isExistontacts = useSelector(state =>
    Boolean(state.contacts.items.length)
  );

  useEffect(() => {
    !isExistontacts && dispatch(fetchContacts());
  }, [dispatch, isExistontacts]);

  const addContactOnsubmit = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const normolizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normolizedName)
    ) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact(contact));
  };

  const handleFilter = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const fordDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Box ml="auto" mr="auto">
      <Box textAlign="center">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContactOnsubmit} />

        <h2>Contacts </h2>
        <Filter value={filter} onChange={handleFilter} />
        {isLoadingContacts && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Puff color="#3498db" />
          </div>
        )}
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={fordDeleteContact}
        />
      </Box>
    </Box>
  );
}
export default ContactsPage;
