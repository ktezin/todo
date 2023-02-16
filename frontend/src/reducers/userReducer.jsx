import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: true,
	user: {},
	isAuthenticated: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loadUser: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.isAuthenticated = action.payload;
		},
		logout: (state) => {
			state.loading = false;
			state.user = {};
			state.isAuthenticated = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { loadUser } = userSlice.actions;

export const loadUserAsync = () => async (dispatch) => {
	const response = await axios.get("/api/login");
	dispatch(loadUser(response.data.user));
};

export const logoutAsync = () => async (dispatch) => {
	await axios.get("/api/logout");
	dispatch(logout());
};

export const userData = (state) => state.user;

export default userSlice.reducer;
