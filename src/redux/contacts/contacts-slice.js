import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (store, action) => {
        store.isLoading = false;
        store.error = null;
        store.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, action) => {
        store.isLoading = false;
        store.items.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, action) => {
        store.isLoading = false;
        const index = store.items.findIndex(item => (item.id = action.payload));
        store.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, action) => {
        store.isLoading = false;
        store.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;

// extraReducers: builder => {
//     builder
//       .addCase(actions.fetchAllContactsLoading, store => {
//         store.isLoading = true;
//       })
//       .addCase(actions.fetchAllContactsSuccess, (store, action) => {
//         store.isLoading = false;
//         store.error = null;
//         store.items = action.payload;
//       })
//       .addCase(actions.fetchAllContactsError, (store, action) => {
//         store.isLoading = false;
//         store.error = action.payload;
//       })
//       .addCase(actions.fetchAddContactLoading, store => {
//         store.isLoading = true;
//       })
//       .addCase(actions.fetchAddContactSuccess, (store, action) => {
//         store.isLoading = false;
//         store.items.push(action.payload);
//       })
//       .addCase(actions.fetchAddContactError, (store, action) => {
//         store.isLoading = false;
//         store.error = action.payload;
//       })
//       .addCase(actions.fetchDeleteContactLoading, store => {
//         store.isLoading = true;
//       })
//       .addCase(actions.fetchDeleteContactSuccess, (store, action) => {
//         store.isLoading = false;
//         const index = store.items.findIndex(item => (item.id = action.payload));
//         store.items.splice(index, 1);
//       })
//       .addCase(actions.fetchDeleteContactError, (store, action) => {
//         store.isLoading = false;
//         store.error = action.payload;
//       });
//   }
