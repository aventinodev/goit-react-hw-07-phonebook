import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://63fc9aaa859df29986c04803.mockapi.io/api/aventino/contacts',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  console.log(result);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  console.log(data);
  return data;
};
