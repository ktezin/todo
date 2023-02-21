import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { boardData, createBoard, getBoards } from "../reducers/boardReducer";

const Container = styled.div``;

const HeaderText = styled.h2`
	padding: 1rem;
	font-weight: 700;
	border-radius: 0.2rem;
	margin: 0.5rem;
	border-bottom: 1px solid lightgrey;
`;

const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-left: 1rem;
	margin-right: 1rem;
	gap: 2rem;
	align-items: center;
	@media (max-width: 1440px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Card = styled(Link)`
	background-color: black;
	background-image: url("${(props) => props.image};");
	color: white;
	border-radius: 0.5rem;
	height: 200px;
	width: 100%;
	text-align: center;
	font-weight: 500;
	font-size: 2rem;
	text-decoration: none;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	&:hover {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
			rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	margin: 2rem;
`;

const TextInput = styled.input`
	width: 50vw;
	height: 2rem;
	border: none;
	border-radius: 1.2rem;
	margin-right: 1rem;
	padding: 1rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Button = styled.button`
	border: none;
	border-radius: 1.2rem;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Boards = () => {
	const dispatch = useDispatch();
	const { loading, boards } = useSelector(boardData);

	useEffect(() => {
		dispatch(getBoards());
	}, [dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		const response = dispatch(createBoard(data.get("name")));
		response.then(() => location.reload());
	};

	return (
		<Container>
			<HeaderText>Boards</HeaderText>

			<Form onSubmit={submitHandler}>
				<TextInput name="name" />
				<Button type="submit">Create Board</Button>
			</Form>
			{loading ? (
				"Loading"
			) : (
				<Cards>
					{boards &&
						boards.map((value, index) => (
							<Card
								to={`/boards/${value._id}`}
								image={"https://source.unsplash.com/random"}
								key={index}
							>
								{value.name}
							</Card>
						))}
				</Cards>
			)}
		</Container>
	);
};

export default Boards;
