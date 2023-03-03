import * as api from '../../shared/contacts-api';
import * as actions from './contacts-action';

const isDublicate = (contacts, { name, phone }) => {
  const normalizedName = name.toLowerCase();
  const result = contacts.find(contact => {
    return (
      contact.name.toLowerCase() === normalizedName || contact.phone === phone
    );
  });
  return Boolean(result);
};

export const fetchAllContacts = () => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchAllContactsLoading());
      const data = await api.getAllContacts();

      dispatch(actions.fetchAllContactsSuccess(data));
    } catch ({ response }) {
      dispatch(actions.fetchAllContactsError(response.data.message));
    }
  };

  return func;
};

export const fetchAddContact = data => {
  const func = async (dispatch, getState) => {
    try {
      const { contacts } = getState();

      if (isDublicate(contacts.items, data)) {
        alert('Such name or number is aledy exist');
        return false;
      }
      dispatch(actions.fetchAddContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.fetchAddContactSuccess(result));
    } catch ({ response }) {
      dispatch(actions.fetchAddContactError(response.data.message));
    }
  };
  return func;
};

export const fetchDeleteContact = id => {
  const func = async dispatch => {
    try {
      dispatch(actions.fetchDeleteContactLoading());

      await api.deleteContact(id);

      dispatch(actions.fetchDeleteContactSuccess(id));
    } catch ({ response }) {
      // console.log(response.data.message);
      dispatch(actions.fetchDeleteContactError(response));
    }
  };
  return func;
};
