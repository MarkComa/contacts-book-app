import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
import { authUserType, userType, resultResType } from "../../types/type";

export interface authState {
	isAuth: boolean;
	user?: userType;
	isFetching: boolean;
	resultRes?: resultResType;
	isOk: boolean;
}

const initialState: authState = {
	isAuth: false,
	user: undefined,
	isFetching: false,
	resultRes: undefined,
	isOk: false,
};

export const login = createAsyncThunk(
	"auth/login",
	async function ({ email, password }: authUserType, thunkAPI) {
		try {
			const response = await authAPI.login(email, password);
			thunkAPI.dispatch(setUser(response.data.user));
			localStorage.setItem("token", response.data.token);
		} catch (error: any) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
export const registration = createAsyncThunk(
	"auth/registration",
	async function ({ email, password }: authUserType, thunkAPI) {
		try {
			const response = await authAPI.registration(email, password);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(
				"Не удалось зарегистрировать пользователя",
			);
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
			state.isOk = true;
		});
		builder.addCase(registration.rejected, (state) => {
			state.isFetching = false;
			state.isOk = false;
		});
		builder.addCase(login.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(login.fulfilled, (state) => {
			state.isFetching = false;
		});
		builder.addCase(login.rejected, (state) => {
			state.isFetching = false;
		});
	},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
