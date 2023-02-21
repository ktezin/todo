import React, { useEffect } from "react";
import styled from "styled-components";
import { VscDebugStart } from "react-icons/vsc";
import { MdDoneOutline, MdRemoveCircleOutline } from "react-icons/md";
import { BiUpvote, BiDownvote } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import Modal from "styled-react-modal";
import { useParams } from "react-router-dom";
import {
	addIdea,
	boardData,
	getBoard,
	getIdeas,
	getTasks,
	upvoteIdea,
} from "../reducers/boardReducer";
import { userData } from "../reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div``;

const Header = styled.div`
	display: flex;
	margin: 1rem;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: 0.5rem;
	}
`;

const HeaderText = styled.h2`
	background-color: white;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	padding: 1rem;
	font-weight: 700;
	border-radius: 0.2rem;
	margin: 0.5rem;
`;

const Members = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	padding: 1rem;
	border-radius: 0.2rem;
	margin: 0.5rem;
`;

const MembersText = styled.h5`
	font-weight: 700;
	margin-right: 1rem;
`;

const MemberButton = styled.button`
	background-color: white;
	border-radius: 1rem;
	border: none;
	padding: 1rem;
	margin-right: 0.3rem;
	height: 100%;
	background-color: #0095ff;
	&:hover {
		background-color: #07c;
	}
`;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;
	margin: 1rem;
	@media (max-width: 1440px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const List = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 0.2rem;
	box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
		rgba(17, 17, 26, 0.1) 0px 0px 8px;
	padding: 1rem;
	background-color: white;
`;

const ListText = styled.h4`
	font-weight: 700;
	margin: 0.7rem;
	padding-bottom: 2px;
	border-bottom: 1px solid lightgrey;
`;

const Card = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height 90px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	border-radius: 0.6rem;
	border-left: 0.8rem solid ${(props) => props.color};
	spacing: 1rem;
	margin-bottom: 0.7rem;
	&:hover {
		cursor: pointer;
		background-color: #E5E4E2;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
	animation: fadeIn;
	animation-duration: 1s;
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
`;

const CardText = styled.p`
	font-weight: 300;
	margin: 0;
`;

const CardOwner = styled.p`
	font-size: 0.9rem;
	font-weight: 200;
	margin: 0;
	color: grey;
`;

const CardTimeText = styled.span`
	display: block;
	font-weight: 300;
	margin: 0;
`;

const CardActions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border-top-right-radius: 0.8rem;
	border-bottom-right-radius: 0.8rem;
`;

const CardButton = styled.button`
	background-color: inherit;
	border-radius: 0.8rem;
	border: none;
	padding: 0.8rem;
	&:hover {
		color: #07c;
		animation: flash;
		animation-duration: 1s;
	}
`;

const Vote = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const AddCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height 60px;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
	border-radius: 0.6rem;
	spacing: 1rem;
	margin-bottom: 0.7rem;
	padding: 0.8rem;
	&:hover {
		cursor: pointer;
		background-color: #E5E4E2;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
	animation: bounce;
	animation-duration: 1s;
`;

const StyledModal = Modal.styled`
	display: "flex";
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 20rem;
	max-width: 26rem;
	min-height: 20rem;
 	background-color: white;
 	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 	border-radius: 0.5rem;
	padding: 1rem;
	font-size: 1.2rem;
	font-weight: 500;
	animation: fadeInDown;
	animation-duration: 0.3s;
`;

const ModalText = styled.h2`
	text-align: center;
`;

const Input = styled.input`
	display: "flex";
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.fullWidth && "100%"};
	height: 2.2rem;
	background-color: white;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 0.2rem;
	border: none;
	padding: 0.2rem;
	margin: 0.2rem;
`;

const Button = styled.button`
	width: ${(props) => props.fullWidth && "100%"};
	background-color: #00b9e8;
	border-radius: 0.2rem;
	border: 1px;
	padding: 0.8rem;
	margin-top: auto;
	font-weight: 500;
	font-size: 1rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	&:hover {
		color: black;
		background-color: #72a0c1;
	}
`;

const Board = () => {
	const dispatch = useDispatch();

	const { loading, board, ideas, todos } = useSelector(boardData);
	const { user } = useSelector(userData);

	const [isOpen, setIsOpen] = React.useState(false);
	const [isCardOpen, setIsCardOpen] = React.useState(false);
	const [card, setCard] = React.useState({});

	const boardId = useParams().boardId;

	useEffect(() => {
		dispatch(getBoard(boardId));
		dispatch(getIdeas({ id: boardId }));
		dispatch(getTasks({ id: boardId }));
	}, [dispatch, boardId]);

	function toggleModal(e) {
		setIsOpen(!isOpen);
	}

	function toggleCardModal(e, value) {
		setIsCardOpen(!isCardOpen);
		setCard(value);
	}

	const submitHandler = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		await dispatch(addIdea({ id: boardId, data: data }));
		updateBoard();
	};

	const updateBoard = async () => {
		dispatch(getIdeas({ id: boardId }));
		dispatch(getTasks({ id: boardId }));
	};

	return (
		<Container>
			{loading ? (
				"loading"
			) : (
				<>
					<Header>
						<HeaderText>{board.name && board.name}</HeaderText>
						<Members>
							<MembersText>Members: </MembersText>
							{board.members &&
								board.members.map((value, index) => (
									<MemberButton key={index}>{value}</MemberButton>
								))}
						</Members>
					</Header>

					<Wrapper>
						<List>
							<ListText>Brainstorm</ListText>
							{ideas &&
								ideas.map((value, index) => (
									<Card color="#9966CC" key={index}>
										<CardContent onClick={(e) => toggleCardModal(e, value)}>
											<CardText>{value.title}</CardText>
											<CardOwner>{value.createdBy}</CardOwner>
											<CardOwner>{value.estimatedTime}</CardOwner>
										</CardContent>

										<CardActions>
											<Vote>
												<CardButton
													onClick={async () => {
														await dispatch(
															upvoteIdea({
																id: boardId,
																data: { ideaId: value._id },
															})
														);
														updateBoard();
													}}
												>
													{value.votes.includes(user._id) ? null : (
														<BiUpvote size={20} />
													)}
												</CardButton>
												<CardButton>
													<BiDownvote size={20} />
												</CardButton>
											</Vote>
										</CardActions>
									</Card>
								))}
							<AddCard onClick={toggleModal}>
								Add Idea
								<AiOutlineFileAdd size={20} />
							</AddCard>
						</List>
						<List>
							<ListText>Todo</ListText>
							{todos &&
								todos.map((todo, index) => (
									<Card color="#FFEF00" key={index}>
										<CardContent onClick={(e) => toggleCardModal(e, todo)}>
											<CardText>{todo.title}</CardText>
											<CardOwner>
												{todo.createdBy}
												<CardTimeText>{todo.estimatedTime}</CardTimeText>
											</CardOwner>
										</CardContent>
										<CardActions>
											<CardButton>
												<VscDebugStart size={20} />
											</CardButton>
										</CardActions>
									</Card>
								))}
						</List>
						<List>
							<ListText>Progress</ListText>
							<Card color="#FFBF00" onClick={toggleCardModal}>
								<CardContent>
									<CardText>Add x to the app</CardText>
									<CardOwner>
										Kağan T. working on it
										<CardTimeText>2h and 12min elapsed</CardTimeText>
									</CardOwner>
								</CardContent>
								<CardActions>
									<CardButton>
										<MdDoneOutline size={20} />
									</CardButton>
								</CardActions>
							</Card>
						</List>
						<List>
							<ListText>Finished</ListText>
							<Card color="#80FF00" onClick={toggleCardModal}>
								<CardContent>
									<CardText>Add x to the app</CardText>
									<CardOwner>
										Kağan T. completed<CardTimeText>4h and 2min</CardTimeText>
									</CardOwner>
								</CardContent>
								<CardActions>
									<CardButton>
										<MdRemoveCircleOutline size={20} />
									</CardButton>
								</CardActions>
							</Card>
						</List>
					</Wrapper>
				</>
			)}
			<StyledModal
				isOpen={isOpen}
				onBackgroundClick={toggleModal}
				onEscapeKeydown={toggleModal}
			>
				<form onSubmit={submitHandler}>
					<ModalText>"Add New Idea"</ModalText>
					<label>Idea:</label>
					<Input type="text" name="title" fullWidth />
					<label>Description:</label>
					<Input type="text" name="description" fullWidth />
					<label>Estimated Time:</label>
					<Input type="text" name="estimatedTime" fullWidth />
					<Button type="submit" onClick={toggleModal} fullWidth>
						Done
					</Button>
				</form>
			</StyledModal>
			<StyledModal
				isOpen={isCardOpen}
				onBackgroundClick={(e) => toggleCardModal(e, {})}
				onEscapeKeydown={(e) => toggleCardModal(e, {})}
			>
				<ModalText>Idea Info</ModalText>
				<h4>{card.title}</h4>
				<p>{card.description}</p>
				<p>{card.estimatedTime}</p>
				{card.status && (
					<Button type="submit" onClick={toggleModal} fullWidth>
						Remove Card
					</Button>
				)}
				<Button onClick={(e) => toggleCardModal(e, {})} fullWidth>
					Done
				</Button>
			</StyledModal>
		</Container>
	);
};

export default Board;
