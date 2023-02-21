import { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";

const FocusContainer = Modal.styled`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-width: 30rem;
	max-width: 32rem;
	min-height: 30rem;
	
	text-align: center;
	animation: fadeInDown;
	animation-duration: 0.3s;
`;

const TimeBox = styled.div`
	background-color: rgba(255, 255, 255, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	& div:last-child {
		border-right-color: transparent;
	}
`;

const Box = styled.div`
	padding: 1rem;
	border-right: solid 1px rgba(255, 255, 255, 0.2);
`;

const Time = styled.p`
	margin: 0;
	font-size: 2rem;
	font-weight: 700;
`;

const Placeholder = styled.p`
	margin: 0;
	font-size: 1rem;
	font-weight: 300;
`;

const Button = styled.button`
	width: ${(props) => props.fullWidth && "100%"};
	background-color: #00b9e8;
	border-radius: 0.2rem;
	border: 1px;
	padding: 0.8rem;
	margin-top: 0.5rem;
	font-weight: 500;
	font-size: 1rem;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	&:hover {
		color: black;
		background-color: #72a0c1;
	}
`;

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function FocusMode(props) {
	const [timespan, setTimespan] = useState(
		new Date(props.deadline) - Date.now()
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTimespan(Date.now() - new Date(props.deadline));
		}, props.interval);

		return () => {
			clearInterval(intervalId);
		};
	}, [props.deadline, props.interval]);

	return (
		<FocusContainer
			isOpen={props.inFocusMode}
			onBackgroundClick={() => props.setInFocusMode(false)}
			onEscapeKeydown={() => props.setInFocusMode(false)}
		>
			<TimeBox>
				<Box>
					<Time>{Math.floor(timespan / DAY)}</Time>
					<Placeholder>days</Placeholder>
				</Box>
				<Box>
					<Time>{Math.floor((timespan / HOUR) % 24)}</Time>
					<Placeholder>hours</Placeholder>
				</Box>
				<Box>
					<Time>{Math.floor((timespan / MINUTE) % 60)}</Time>
					<Placeholder>minutes</Placeholder>
				</Box>
				<Box>
					<Time>{Math.floor((timespan / SECOND) % 60)}</Time>
					<Placeholder>seconds</Placeholder>
				</Box>
			</TimeBox>

			<h4>since you started working...</h4>
			<Button onClick={() => props.setInFocusMode(false)} fullWidth>
				Finish
			</Button>
			<Button onClick={() => props.setInFocusMode(false)} fullWidth>
				Exit
			</Button>
		</FocusContainer>
	);
}
