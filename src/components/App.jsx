import React from 'react';

import FormContact from 'components/FormContact/FormContact';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import { Wrapper, Title } from './App.styled';

const App = () => {
  return (
    <div>
      <Wrapper>
        <Title>Phonebook</Title>
        <FormContact />
        <Title>Contacts</Title>
        <Filter />
        <Contacts />
      </Wrapper>
    </div>
  );
};

export default App;
