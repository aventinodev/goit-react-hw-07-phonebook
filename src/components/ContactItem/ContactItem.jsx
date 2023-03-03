import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';
import { Item, Button } from './ContactItem.styled';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    console.log(id);
    dispatch(fetchDeleteContact(id));
  };

  return (
    <Item>
      <p>
        {name}: {phone}
      </p>
      <Button type="button" onClick={onDeleteContact}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
