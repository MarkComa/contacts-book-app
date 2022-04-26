import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactsAPI } from "../../api/api";
import {
	contactsType,
	reqContactsType,
	reqEditContactType,
} from "../../types/type";

export interface contactsState {
	contacts: contactsType[];
	isFetching: boolean;
}

const initialState: contactsState = {
	contacts: [],
	isFetching: false,
};

export const getContacts = createAsyncThunk(
	"contacts/getContacts",
	async function (userId: string, thunkAPI) {
		const response = await contactsAPI.getContacts(userId);
		thunkAPI.dispatch(setContacts(response.data));
	},
);
export const createContact = createAsyncThunk(
	"contacts/createContact",
	async function ({ data, owner }: reqContactsType, thunkAPI) {
		try {
			const res = await contactsAPI.createContact(
				data.name,
				data.phoneNumber,
				owner,
			);
			return res.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	},
);

export const editContact = createAsyncThunk(
	"contacts/editContact",
	async function ({ id, data, owner }: reqEditContactType, thunkAPI) {
		try {
			const res = await contactsAPI.editContact(
				id,
				data.name,
				data.phoneNumber,
				owner,
			);
			return res.data;
		} catch (error) {
			thunkAPI.rejectWithValue(error);
		}
	},
);

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async function (id: string, thunkAPI) {
		try {
			const res = await contactsAPI.removeContact(id);
			return res.data;
		} catch (error: any) {
			thunkAPI.rejectWithValue(error.message);
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
		builder.addCase(createContact.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(createContact.fulfilled, (state, action) => {
			state.contacts.push(action.payload);
			state.isFetching = false;
		});
		builder.addCase(createContact.rejected, (state) => {
			state.isFetching = false;
		});
		builder.addCase(removeContact.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(removeContact.fulfilled, (state, action) => {
			const contacts = state.contacts.filter(
				(el: contactsType) => el._id !== action.payload.id,
			);
			state.contacts = contacts;
			state.isFetching = false;
		});
		builder.addCase(removeContact.rejected, (state) => {
			state.isFetching = false;
		});
		builder.addCase(editContact.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(editContact.fulfilled, (state) => {
			state.isFetching = false;
		});
		builder.addCase(editContact.rejected, (state) => {
			state.isFetching = false;
		});
		builder.addCase(getContacts.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(getContacts.fulfilled, (state) => {
			state.isFetching = false;
		});
		builder.addCase(getContacts.rejected, (state) => {
			state.isFetching = false;
		});
	},
});
export const { setContacts } = contactsSlise.actions;
export default contactsSlise.reducer;
