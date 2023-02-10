import React from "react";
import styled from "styled-components";

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
	padding-left: 0.8rem;
	&:hover {
		cursor: pointer;
		background-color: #E5E4E2;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
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

const CardTimeText = styled.p`
	font-weight: 300;
	margin: 0;
`;

const CardActions = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background-color: #0095ff;
	border-top-right-radius: 0.8rem;
	border-bottom-right-radius: 0.8rem;
`;

const CardButton = styled.button`
	background-color: white;
	border-radius: 0.8rem;
	border: none;
	padding: 0.8rem;
	background-color: #0095ff;
	&:hover {
		background-color: #07c;
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
	padding-left: 0.8rem;
	&:hover {
		cursor: pointer;
		background-color: #E5E4E2;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
	}
`;

const Board = () => {
	return (
		<Container>
			<Header>
				<HeaderText>Project X's Board</HeaderText>
				<Members>
					<MembersText>Members: </MembersText>
					<MemberButton>sa</MemberButton>
					<MemberButton>as</MemberButton>
				</Members>
			</Header>

			<Wrapper>
				<List>
					<ListText>Brainstorm</ListText>
					<Card color="#9966CC">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>Kağan T.</CardOwner>
						</CardContent>
						<CardActions>
							<Vote>
								<CardButton>+</CardButton>
								<CardButton>-</CardButton>
							</Vote>
						</CardActions>
					</Card>
					<Card color="#9966CC">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>Kağan T.</CardOwner>
						</CardContent>
						<CardActions>
							<Vote>
								<CardButton>+</CardButton>
								<CardButton>-</CardButton>
							</Vote>
						</CardActions>
					</Card>
					<Card color="#9966CC">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>Kağan T.</CardOwner>
						</CardContent>
						<CardActions>
							<Vote>
								<CardButton>+</CardButton>
								<CardButton>-</CardButton>
							</Vote>
						</CardActions>
					</Card>
					<AddCard>Add Idea</AddCard>
				</List>
				<List>
					<ListText>Todo</ListText>
					<Card color="#FFEF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T.
								<CardTimeText>Overall 3 hours</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Start</CardButton>
						</CardActions>
					</Card>
					<Card color="#FFEF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T.<CardTimeText>Overall 3 hours</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Start</CardButton>
						</CardActions>
					</Card>
					<Card color="#FFEF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T.<CardTimeText>Overall 3 hours</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Start</CardButton>
						</CardActions>
					</Card>
				</List>
				<List>
					<ListText>Progress</ListText>
					<Card color="#FFBF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T. working on it
								<CardTimeText>2h and 12min elapsed</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Finish</CardButton>
						</CardActions>
					</Card>
					<Card color="#FFBF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T. working on it
								<CardTimeText>2h and 12min elapsed</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Finish</CardButton>
						</CardActions>
					</Card>
					<Card color="#FFBF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T. working on it
								<CardTimeText>2h and 12min elapsed</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Finish</CardButton>
						</CardActions>
					</Card>
				</List>
				<List>
					<ListText>Finished</ListText>
					<Card color="#80FF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T. completed<CardTimeText>4h and 2min</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Remove</CardButton>
						</CardActions>
					</Card>
					<Card color="#80FF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T. completed<CardTimeText>4h and 2min</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Remove</CardButton>
						</CardActions>
					</Card>
					<Card color="#80FF00">
						<CardContent>
							<CardText>Add x to the app</CardText>
							<CardOwner>
								Kağan T. completed<CardTimeText>4h and 2min</CardTimeText>
							</CardOwner>
						</CardContent>
						<CardActions>
							<CardButton>Remove</CardButton>
						</CardActions>
					</Card>
				</List>
			</Wrapper>
		</Container>
	);
};

export default Board;
