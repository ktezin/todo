import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div``;

const HeaderText = styled.h2`
	padding: 1rem;
	font-weight: 700;
	border-radius: 0.2rem;
	margin: 0.5rem;
	border-bottom: 1px solid lightgrey;
`;

const Cards = styled.div`
	display: flex;
	align-items: center;
`;

const Card = styled(Link)`
	background-color: white;
	border-radius: 0.5rem;
	height: 200px;
	width: 200px;
	margin: 1rem;
	text-align: center;
	text-decoration: none;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
`;

const Board = () => {
	return (
		<Container>
			<HeaderText>Boards</HeaderText>
			<Cards>
				<Card to="/boards/test">Test Board</Card>
				<Card to="/boards/test">Test Board 2</Card>
				<Card to="/boards/test">Test Board 3</Card>
				<Card to="/boards/test">Test Board 4</Card>
				<Card to="/boards/test">Test Board 5</Card>
			</Cards>
		</Container>
	);
};

export default Board;
