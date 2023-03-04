import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
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
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Text>Loading...</Text>}
      {error && <Text>Something wrong!</Text>}

      <List>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </List>
    </>
  );
};
export default Contacts;
