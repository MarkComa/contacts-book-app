import { AppDispatch } from "./../store";
import {
	createSlice,
	createAsyncThunk,
	PayloadAction,
} from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
import { authUserType, userType,resultResType } from "../../types/type";

export interface authState {
	isAuth: boolean;
	user?: userType;
	isFetching: boolean;
	resultRes?: resultResType;
}

const initialState: authState = {
	isAuth: false,
	user: undefined,
	isFetching: false,
	resultRes: undefined
}

export const login = createAsyncThunk<
	void,
	authUserType,
	{ dispatch: AppDispatch }
>(
	"auth/login",
	async function ({ email, password }, { rejectWithValue, dispatch }) {
		try {
			const response = await authAPI.login(email, password);
			dispatch(setUser(response.data.user));
			localStorage.setItem("token", response.data.token);
		} catch (error: any) {
			return rejectWithValue(error);
		}
	},
);
export const registration = createAsyncThunk<resultResType, authUserType, {rejectValue: resultResType} >(
	"auth/registration",
	async function ({ email, password }: authUserType, { rejectWithValue}) {
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
	extraReducers: (builder) => {
		builder.addCase(registration.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(registration.fulfilled, (state, action) => {
			state.isFetching = false;
			state.resultRes = action.payload;
		});
		builder.addCase(registration.rejected, (state, action) => {
			state.isFetching = false;
			state.resultRes = action.payload;
		});
	},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
