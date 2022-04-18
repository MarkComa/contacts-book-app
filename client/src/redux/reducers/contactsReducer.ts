import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { contactsAPI } from "../../api/api";
import { contactsType } from "../../types/type";

export interface contactsState {
	contacts: contactsType[];
}

const initialState: contactsState = {
	contacts: [],
};

export const getContacts = createAsyncThunk(
	"contacts/getContacts",
	async function (userId: string, { dispatch }) {
		const response = await contactsAPI.getContacts(userId);
		dispatch(setContacts(response.data));
	},
);
export const createContact = createAsyncThunk(
	"contacts/createContact",
	async function ({ name, phoneNumber, owner }: contactsType) {
		try {
			const res = await contactsAPI.createContact(
				name,
				phoneNumber,
				owner,
			);
			return res.data;
		} catch (error: any) {
			alert(error.message);
		}
	},
);

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async function (id: string) {
		try {
			const res = await contactsAPI.removeContact(id);
			return res.data;
		} catch (error: any) {
			alert(error.message);
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
	extraReducers: (builder) => {
		builder.addCase(createContact.fulfilled, (state, action) => {
			state.contacts.push(action.payload);
		});
		builder.addCase(removeContact.fulfilled, (state, action) => {
			const contacts = state.contacts.filter(
				(el: contactsType) => el._id !== action.payload.id,
			);
			state.contacts = contacts;
		});
	},
});
export const { setContacts } = contactsSlise.actions;
export default contactsSlise.reducer;
