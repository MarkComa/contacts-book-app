import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authAPI } from "../../api/api";
import { authUserType, userType, resultResType } from "../../types/type";

export interface authState {
	user?: userType;
	isFetching: boolean;
	resultRes?: resultResType;
	isAuth: boolean;
	isOk: boolean;
}

const initialState: authState = {
	user: undefined,
	isFetching: false,
	resultRes: undefined,
	isAuth: false,
	isOk: false,
};
export const auth = createAsyncThunk("auth/auth", async function (_, thunkAPI) {
	try {
		const response = await authAPI.auth();
		thunkAPI.dispatch(setUser(response.data.user));
	} catch (error) {
		localStorage.removeItem("token");
	}
});

export const login = createAsyncThunk(
	"auth/login",
	async function ({ data }: authUserType, thunkAPI) {
		try {
			const response = await authAPI.login(data.email, data.password);
			thunkAPI.dispatch(setUser(response.data.user));
			localStorage.setItem("token", response.data.token);
		} catch (e) {
			return thunkAPI.rejectWithValue(e);
		}
	},
);
export const registration = createAsyncThunk(
	"auth/registration",
	async function ({ data }: authUserType, thunkAPI) {
		try {
			const response = await authAPI.registration(
				data.email,
				data.password,
			);
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
		},
		logout(state) {
			state.user = undefined;
			state.isAuth = false;
			localStorage.removeItem("token");
		},
	},
	extraReducers: (builder) => {
		builder.addCase(registration.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(registration.fulfilled, (state, action) => {
			state.resultRes = action.payload;
			state.isOk = true;
			state.isFetching = false;
			alert(action.payload.message);
		});
		builder.addCase(registration.rejected, (state) => {
			state.isOk = false;
			state.isFetching = false;
		});
		builder.addCase(login.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(login.fulfilled, (state) => {
			state.isAuth = true;
			state.isFetching = false;
		});
		builder.addCase(login.rejected, (state) => {
			state.isFetching = false;
		});
		builder.addCase(auth.pending, (state) => {
			state.isFetching = true;
		});
		builder.addCase(auth.fulfilled, (state) => {
			state.isAuth = true;
			state.isFetching = false;
		});
		builder.addCase(auth.rejected, (state) => {
			state.isAuth = false;
			state.isFetching = false;
		});
	},
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
