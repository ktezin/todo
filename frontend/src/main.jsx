import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import Login from "./routes/Login";
import Boards from "./routes/Boards";
import Board from "./routes/Board";
import userReducer from "./reducers/userReducer";
import boardReducer from "./reducers/boardReducer";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
	reducer: {
		user: userReducer,
		board: boardReducer,
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Navigate to="/boards" />,
			},
			{
				path: "/boards",
				element: <Boards />,
			},
			{
				path: "/boards/:boardId",
				element: <Board />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
