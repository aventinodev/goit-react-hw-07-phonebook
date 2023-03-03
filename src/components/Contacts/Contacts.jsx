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
import { List } from './Contacts.styled';

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
      {isLoading && <p>Loading...</p>}
      {error && <p>Something wrong!</p>}
      <List>
        {contacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))}
      </List>
    </>
  );
};
export default Contacts;
