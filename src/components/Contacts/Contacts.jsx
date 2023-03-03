import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';

import ContactItem from 'components/ContactItem/ContactItem';
import { List, Text } from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Something wrong!</Text>}
      {isLoading || (contacts.length === 0 && <Text>No contacts in list</Text>)}
      <List>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </List>
    </>
  );
};
export default Contacts;
