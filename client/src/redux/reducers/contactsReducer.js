import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactsAPI } from "../../api/api";

const initialState = {
	contacts: [],
};

export const getContacts = createAsyncThunk(
	"contacts/getContacts",
	async function (userId, { dispatch }) {
		const response = await contactsAPI.getContacts(userId);
		dispatch(setContacts(response.data));
	},
);
export const createContact = createAsyncThunk(
	"contacts/createContact",
	async function ({ name, phoneNumber, userId }) {
		try {	
			const res = await contactsAPI.createContact(
				name,
				phoneNumber,
				userId,
			);
			return res.data
		} catch (error) {
            alert(error.message)
        }
	},
);

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async function (id) {
		try {
			const res = await contactsAPI.removeContact(id);
			return res.data
		} catch (error) {
            alert(error.message)
        }
	},
);

const contactsSlise = createSlice({
	name: "contacts",
	initialState,
	reducers: {
		setContacts(state, action) {
			state.contacts = action.payload.contacts;
		},
	},
	extraReducers: {
		[createContact.fulfilled]: (state, action) => {
			state.contacts.push(action.payload);
		},
		[removeContact.fulfilled]: (state,action) => {
			const contacts = state.contacts.filter(el => el._id !== action.payload.id)
			state.contacts = contacts
		}
	},
});
export const { setContacts } = contactsSlise.actions;
export default contactsSlise.reducer;
