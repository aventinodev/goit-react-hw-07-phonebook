import { createSlice } from '@reduxjs/toolkit';
import * as actions from './contacts-action';

const contactsSlice = createSlice(
  {
    name: 'contacts',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    reducers: {},
    extraReducers: {
      [actions.fetchAllContactsLoading]: store => {
        store.isLoading = true;
      },
      [actions.fetchAllContactsSuccess]: (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload;
      },
      [actions.fetchAllContactsError]: (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      },
      [actions.fetchAddContactLoading]: store => {
        store.isLoading = true;
      },
      [actions.fetchAddContactSuccess]: (store, action) => {
        store.isLoading = false;
        store.items.push(action.payload);
      },
      [actions.fetchAddContactError]: (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      },
      [actions.fetchDeleteContactLoading]: store => {
        store.isLoading = true;
      },
      [actions.fetchDeleteContactSuccess]: (store, action) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => (item.id = action.payload));
        store.items.splice(index, 1);
      },
      [actions.fetchDeleteContactError]: (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      },
    },
  }

  //   state.filter(contact => contact.id !== payload),
);

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
