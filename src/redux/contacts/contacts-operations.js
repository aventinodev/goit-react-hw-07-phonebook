import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
  // {
  //   condition: (data, { getState }) => {
  //     const { contacts } = getState();
  //     const normalizedName = data.name.toLowerCase();
  //     const result = contacts.items.find(contact => {
  //       return (
  //         contact.name.toLowerCase() === normalizedName ||
  //         contact.phone === data.phone
  //       );
  //     });
  //     if (result) {
  //       alert('Such name or number is aledy exist');
  //       return false;
  //     }
  //   },
  // }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      await api.deleteContact(id);
      console.log(id);
      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
