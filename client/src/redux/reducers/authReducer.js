import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";

const initialState = {
	isAuth: false,
	user: {},
	isFetching: false,
	message: "",
	error: null,
};

export const login = createAsyncThunk(
	"auth/login",
	async function ({ email, password }, { rejectWithValue, dispatch }) {
		try {
			const response = await authAPI.login(email, password);
			dispatch(setUser(response.data.user));
			localStorage.setItem("token", response.data.token);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);
export const registration = createAsyncThunk(
	"auth/registration",
	async function ({ email, password }, { rejectWithValue }) {
		try {
			const response = await authAPI.registration(email, password);
			return response.data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	},
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload.user;
			state.isAuth = true;
		},
	},
	extraRedusers: {
		[registration.pending]: (state) => {
			state.isFetching = true;
		},
		[registration.fulfilled]: (state, action) => {
			state.message = action.payload.message;
		},
		[registration.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
