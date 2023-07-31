import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
  state.items.sort((firstContact, secondContact) =>
    firstContact.name
      .toLowerCase()
      .localeCompare(secondContact.name.toLowerCase())
  );
};

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
  state.items.sort((firstContact, secondContact) =>
    firstContact.name
      .toLowerCase()
      .localeCompare(secondContact.name.toLowerCase())
  );
};

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  // reducers: {
  // addContact: {
  //   reducer(state, action) {
  //     state.items.push(action.payload);
  //     state.items.sort((firstContact, secondContact) =>
  //       firstContact.name
  //         .toLowerCase()
  //         .localeCompare(secondContact.name.toLowerCase())
  //     );
  //   },
  //   prepare(valueObj) {
  //     return {
  //       payload: {
  //         ...valueObj,
  //         id: nanoid(),
  //       },
  //     };
  //   },
  // },

  // deleteContact(state, action) {
  //   const index = state.items.findIndex(
  //     contact => contact.id === action.payload
  //   );
  //   state.items.splice(index, 1);
  // },

  // },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
