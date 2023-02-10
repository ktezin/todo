import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import Login from "./routes/Login";
import Boards from "./routes/Boards";
import Board from "./routes/Board";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
      {
				path: "/boards",
				element: <Boards />,
			},
      {
				path: "/boards/:boardId",
				element: <Board />,
			},
			{
				path: "login",
				element: <Login />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
