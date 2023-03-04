import React from 'react';
import { useState } from 'react';
import { fetchAddContact } from 'redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';

import { Form, Label, Input, Button } from './FormContact.styled';

const FormContact = () => {
  const initialState = {
    name: '',
    phone: '',
  };
  const [state, setState] = useState({ ...initialState });
  const { name, phone } = state;

  const dispatch = useDispatch();

  const onAddContact = e => {
    e.preventDefault();
    dispatch(fetchAddContact({ name, phone }));
    setState({ ...initialState });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <Form onSubmit={onAddContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default FormContact;
