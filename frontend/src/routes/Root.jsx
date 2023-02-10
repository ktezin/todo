import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../globalStyles";

const Sidebar = styled.div`
	top: 0;
	left: 0;
	width: 15rem;
	height: 100vh;
	position: absolute;
	overflow-x: hidden;
	border-right: 1px solid lightgrey;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
	background-color: white;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const SidebarWrapper = styled.div`
	display: flex;
	flexdirection: column;
	justifycontent: center;
	alignitems: center;
	width: 100%;
	height: 100%;
`;

export const ItemsList = styled.ul`
	list-style: none;
	width: 100%;
`;

export const ItemContainer = styled.li`
	margin-top: 0.5rem;
	width: 100%;
	padding: 0.5rem 0.25rem;
	border-radius: 0.2rem;
	cursor: pointer;
	&:hover {
		background: #eaeced;
	}
	&.active {
		background-color: #dbe4f3;
	}
`;

const ItemWrapper = styled.div`
	display: flex;
	alignitems: center;
`;

const Children = styled.div`
	width: 100%;
	height: 100%;
	margin-left: 15rem;
	@media (max-width: 1024px) {
		margin-left: 5rem;
	}
	@media (max-width: 768px) {
		margin-left: 0;
	}
`;

const CustomLink = styled(Link)`
	text-decoration: none;
	color: inherit;
`;

const Root = () => {
	return (
		<div>
			<GlobalStyle />
			<Sidebar>
				<SidebarWrapper>
					<ItemsList>
						<ItemContainer>
							<CustomLink to="/">
								<ItemWrapper>Homepage</ItemWrapper>
							</CustomLink>
						</ItemContainer>
						<ItemContainer>
							<CustomLink to="/boards">
								<ItemWrapper>Boards</ItemWrapper>
							</CustomLink>
						</ItemContainer>
						<ItemContainer>
							<CustomLink to="/logout">
								<ItemWrapper>Logout</ItemWrapper>
							</CustomLink>
						</ItemContainer>
					</ItemsList>
				</SidebarWrapper>
			</Sidebar>

			<Children>
				<Outlet />
			</Children>
		</div>
	);
};

export default Root;
