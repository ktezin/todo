import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin }) => {
	const { loading, user } = useSelector((state) => state.auth);
	if (loading) {
		return null;
	}
	if (isAdmin && (!user || user.role !== "admin")) {
		alert("You don't have permission to view this page");
		return <Navigate to="/" />;
	}
	return <Outlet />;
};

export default ProtectedRoute;