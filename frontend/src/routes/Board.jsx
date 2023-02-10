import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const List = styled.div`
	display: flex;
	flexdirection: column;
`;

const Card = styled.div`
	display: flex;
	flexdirection: column;
`;

const Board = () => {
	return (
		<Container>
			<List>
				<h4>Brainstorm</h4>
				<Card>Add x to the app</Card>
			</List>
			<List>
				<h4>Todo</h4>
				<Card>Add y to the app</Card>
			</List>
			<List>
				<h4>Progress</h4>
				<Card>Add z to the app</Card>
			</List>
			<List>
				<h4>Finished</h4>
				<Card>Add a to the app</Card>
			</List>
		</Container>
	);
};

export default Board;
