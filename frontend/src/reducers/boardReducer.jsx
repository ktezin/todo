import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	loading: true,
	boards: [{}],
	board: {},
	title: "",
	description: "",
	estimatedTime: "",
};

export const boardSlice = createSlice({
	name: "board",
	initialState,
	reducers: {
		loadBoards: (state, action) => {
			state.loading = false;
			state.boards = action.payload;
		},
		loadBoard: (state, action) => {
			state.loading = false;
			state.board = action.payload;
		},
		createBoard: (state, action) => {
			state.loading = false;
			state.board = action.payload;
		},
		addIdea: (state, action) => {
			state.loading = false;
			state.board = action.payload;
		},
	},
});

export const { loadBoards, loadBoard, createBoard, addIdea } =
	boardSlice.actions;

export const loadBoardsAsync = () => async (dispatch) => {
	const response = await axios.get("/api/boards");
	dispatch(loadBoards(response.data.boards));
};

export const loadBoardAsync = (id) => async (dispatch) => {
	const response = await axios.get(`/api/boards/${id}`);
	dispatch(loadBoard(response.data.board));
};

export const createBoardAsync = (name) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await axios.post("/api/board", { name }, config);
	dispatch(createBoard(response.data.board));
};

export const addIdeaAsync = (id, data) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const response = await axios.put(`/api/boards/${id}`, data, config);
	dispatch(addIdea(response.data.board));
};

export const boardData = (state) => state.board;

export default boardSlice.reducer;
