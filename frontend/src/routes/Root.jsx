import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "../globalStyles";
import { TbHome, TbLayoutDashboard, TbLogout, TbLogin } from "react-icons/tb";
import { ModalProvider } from "styled-react-modal";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, logout, userData } from "../reducers/userReducer";
import Login from "./Login";

const AppBar = styled.div`
	top: 0;
	left: 0;
	width: 15rem;
	height: 100vh;
	position: fixed;
	overflow-x: hidden;
	border-right: 1px solid lightgrey;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	background-color: white;
	@media (max-width: 1024px) {
		width: 5rem;
	}
	@media (max-width: 768px) {
		width: 100vw;
		height: 4rem;
	}
`;

const AppBarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	@media (max-width: 768px) {
		justify-content: center;
		align-items: center;
	}
`;

export const ItemsList = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: column;
	list-style: none;
	width: 100%;
	@media (max-width: 1024px) {
		padding: 0.2rem;
	}
	@media (max-width: 768px) {
		padding: 0;
		flex-direction: row;
		justify-content: center;
	}
`;

export const ItemContainer = styled.li`
	margin-top: 0.5rem;
	width: 100%;
	padding: 0.5rem 0.25rem;
	border-radius: 0.5rem;
	cursor: pointer;
	&:hover {
		background: #eaeced;
	}
	&.active {
		background-color: #dbe4f3;
	}
	@media (max-width: 768px) {
		width: auto;
		margin-top: 0;
	}
`;

const ItemWrapper = styled(Link)`
	display: flex;
	justify-content: left;
	align-items: center;
	text-decoration: none;
	color: inherit;
	font-size: 1.7rem;
	padding: 0.5rem;
	@media (max-width: 1024px) {
		justify-content: center;
	}
`;

const ItemText = styled.p`
	margin: 0;
	margin-left: 0.5rem;
	font-weight: 500;
	font-size: 1.5rem;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const Children = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 15rem;
	@media (max-width: 1024px) {
		padding-left: 5rem;
	}
	@media (max-width: 768px) {
		padding-left: 0;
		padding-top: 4rem;
	}
`;

const animationConfiguration = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
};

const Root = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const navigate = useNavigate();

	const auth = useSelector(userData);

	useEffect(() => {
		dispatch(loadUser());
	}, [dispatch]);

	const logoutHandler = () => {
		dispatch(logout());
		navigate(redirect);
	};

	return (
		<div>
			<ModalProvider>
				<GlobalStyle />
				<AppBar>
					<AppBarWrapper>
						<ItemsList>
							<ItemContainer>
								<ItemWrapper to="/">
									<TbHome />
									<ItemText>Homepage</ItemText>
								</ItemWrapper>
							</ItemContainer>
							<ItemContainer>
								<ItemWrapper to="/boards">
									<TbLayoutDashboard />
									<ItemText>Boards</ItemText>
								</ItemWrapper>
							</ItemContainer>
							{auth.isAuthenticated ? (
								<ItemContainer>
									<ItemWrapper onClick={logoutHandler}>
										<TbLogout />
										<ItemText>Logout</ItemText>
									</ItemWrapper>
								</ItemContainer>
							) : (
								<ItemContainer>
									<ItemWrapper to="/login">
										<TbLogin />
										<ItemText>Login</ItemText>
									</ItemWrapper>
								</ItemContainer>
							)}
						</ItemsList>
					</AppBarWrapper>
				</AppBar>

				<AnimatePresence key={location.pathname}>
					<motion.div
						variants={animationConfiguration}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={{ duration: 0.4 }}
					>
						<Children>
							{auth.isAuthenticated ? <Outlet /> : <Login />}
							<ToastContainer autoClose={4000} />
						</Children>
					</motion.div>
				</AnimatePresence>
			</ModalProvider>
		</div>
	);
};

export default Root;
