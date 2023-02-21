import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	boards: [{}],
	board: {},
};

export const getBoards = createAsyncThunk(
	"board/getBoards",
	async (args, thunkAPI) => {
		try {
			const response = await axios.get("/api/boards");
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data.boards);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getBoard = createAsyncThunk(
	"board/getBoard",
	async (id, thunkAPI) => {
		try {
			const response = await axios.get(`/api/boards/${id}`);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data.board);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const createBoard = createAsyncThunk(
	"board/create",
	async (name, thunkAPI) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post("/api/board", { name }, config);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data.board);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getIdeas = createAsyncThunk(
	"board/getIdeas",
	async (args, thunkAPI) => {
		try {
			const response = await axios.get(`/api/ideas/${args.id}`);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data.ideas);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const addIdea = createAsyncThunk(
	"board/idea",
	async (args, thunkAPI) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				`/api/ideas/${args.id}`,
				args.data,
				config
			);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data.board);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const upvoteIdea = createAsyncThunk(
	"board/upvoteIdea",
	async (args, thunkAPI) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				`/api/ideas/${args.id}/upvote`,
				args.data,
				config
			);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data.board);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getTasks = createAsyncThunk(
	"board/getTasks",
	async (args, thunkAPI) => {
		try {
			const response = await axios.get(`/api/tasks/${args.id}`);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const removeTask = createAsyncThunk(
	"board/removeTask",
	async (args, thunkAPI) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.post(
				`/api/tasks/${args.id}`,
				args.data,
				config
			);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const setTaskStatus = createAsyncThunk(
	"board/setTaskStatus",
	async (args, thunkAPI) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		try {
			const response = await axios.put(
				`/api/tasks/${args.id}`,
				args.data,
				config
			);
			if (response.status !== 200) {
				return thunkAPI.rejectWithValue(response.status);
			}
			return thunkAPI.fulfillWithValue(response.data);
		} catch (error) {
			throw thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const boardSlice = createSlice({
	name: "board",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getBoards.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(getBoards.fulfilled, (state, action) => {
				state.loading = false;
				state.boards = action.payload;
			})
			.addCase(getBoards.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(getBoard.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(getBoard.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload;
			})
			.addCase(getBoard.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(createBoard.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(createBoard.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload;
			})
			.addCase(createBoard.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(getIdeas.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(getIdeas.fulfilled, (state, action) => {
				state.loading = false;
				state.ideas = action.payload;
			})
			.addCase(getIdeas.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(addIdea.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(addIdea.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload;
			})
			.addCase(addIdea.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(upvoteIdea.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(upvoteIdea.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload;
			})
			.addCase(upvoteIdea.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(getTasks.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(getTasks.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload.board;
				state.todos = action.payload.tasks.filter(
					(task) => task.status === "todo"
				);
				state.inProgress = action.payload.tasks.filter(
					(task) => task.status === "inProgress"
				);
				state.finished = action.payload.tasks.filter(
					(task) => task.status === "finished"
				);
			})
			.addCase(getTasks.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(removeTask.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(removeTask.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload.board;
			})
			.addCase(removeTask.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(setTaskStatus.pending, (state, action) => {
				state.loading = false;
			})
			.addCase(setTaskStatus.fulfilled, (state, action) => {
				state.loading = false;
				state.board = action.payload.board;
			})
			.addCase(setTaskStatus.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const boardData = (state) => state.board;

export default boardSlice.reducer;
