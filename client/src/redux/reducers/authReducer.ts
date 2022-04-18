import { AppDispatch } from "./../store";
import { createSlice, createAsyncThunk, PayloadAction, ReducersMapObject } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
import { authUserType, userType } from "../../types/type";

export interface authState {
	isAuth: boolean;
	user: userType | undefined;
	isFetching: boolean;
	error: ReducersMapObject;
}

const initialState: authState = {
	isAuth: false,
	user: undefined,
	isFetching: false,
	error: null,
};

export const login = createAsyncThunk<
	void,
	authUserType,
	{ dispatch: AppDispatch; state: authState; extra: any; }
>(
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
	async function ({ email, password }: authUserType, { rejectWithValue }) {
		try {
			const response = await authAPI.registration(email, password);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	},
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<userType>) {
			state.user = action.payload;
			state.isAuth = true;
		},
	},
	extraReducers: {
		[registration.pending]: (state: authState) => {
			state.isFetching = true;
		},
		[registration.fulfilled]: (
			state: authState,
			action: PayloadAction<string>,
		) => {
			state.error.message = action.payload.message;
		},
		[registration.rejected]: (
			state: authState,
			action: PayloadAction<string>,
		) => {
			state.error = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
