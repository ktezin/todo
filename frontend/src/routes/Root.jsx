import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.div`
	left: 0;
	width: 15rem;
	height: 100vh;
	position: absolute;
	overflow-x: hidden;
	border-right: 1px solid grey;
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

export const Children = styled.div`
	width: 100%;
	height: 100%;
	margin-left: 15rem;
	@media (max-width: 468px) {
		margin-left: 5rem;
	}
`;

const Root = () => {
	return (
		<div>
			<Sidebar>
				<SidebarWrapper>
					<ItemsList>
						<ItemContainer>
							<Link to="/">
								<ItemWrapper>Homepage</ItemWrapper>
							</Link>
						</ItemContainer>
						<ItemContainer>
							<Link to="/boards">
								<ItemWrapper>Boards</ItemWrapper>
							</Link>
						</ItemContainer>
						<ItemContainer>
							<Link to="/logout">
								<ItemWrapper>Logout</ItemWrapper>
							</Link>
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
