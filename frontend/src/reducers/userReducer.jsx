import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	user: {},
};

export const loadUser = createAsyncThunk("user/load", async (arg, thunkAPI) => {
	try {
		const response = await axios.get("/api/login");
		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response.status);
		}
		return thunkAPI.fulfillWithValue(response.data.user);
	} catch (error) {
		throw thunkAPI.rejectWithValue(error.response.data.message);
	}
});

export const logout = createAsyncThunk("user/logout", async () => {
	try {
		const response = await axios.get("/api/logout");
		if (!response.ok) {
			return rejectWithValue(response.status);
		}
		return fulfillWithValue(response);
	} catch (error) {
		throw rejectWithValue(error.response.data.message);
	}
});

export const getUser = createAsyncThunk("user/get", async (args, thunkAPI) => {
	try {
		const response = await axios.get(`/api/user/${args.id}`);
		if (response.status !== 200) {
			return thunkAPI.rejectWithValue(response.status);
		}
		return thunkAPI.fulfillWithValue(response.data);
	} catch (error) {
		throw thunkAPI.rejectWithValue(error.response.data.message);
	}
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loadUser.pending, (state, action) => {
				state.loading = false;
				state.isAuthenticated = false;
			})
			.addCase(loadUser.fulfilled, (state, action) => {
				state.loading = false;
				state.isAuthenticated = true;
				state.user = action.payload;
			})
			.addCase(loadUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.isAuthenticated = false;
			})
			.addCase(logout.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.loading = false;
				state.user = null;
				state.isAuthenticated = false;
			})
			.addCase(logout.rejected, (state, action) => {
				state.loading = false;
				state.isAuthenticated = false;
				state.user = null;
				state.error = action.payload;
			})
			.addCase(getUser.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.loading = false;
				state.firstName = action.payload.firstName;
				state.lastName = action.payload.firstlastNameame;
				state.email = action.payload.email;
				state.profilePhoto = action.payload.profilePhoto;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const userData = (state) => state.user;

export default userSlice.reducer;
