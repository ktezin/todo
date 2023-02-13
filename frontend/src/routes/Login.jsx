import React from "react";
import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2`
`;

const GoogleLogin = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	color: white;
	border: 1px solid lightgrey;
	border-radius: 0.3rem;
	padding: 0.3rem;
	text-decoration: none;
`;

const Login = () => {
	return (
		<Container>
			<Title>Login</Title>
			<GoogleLogin href="/api/auth/google">
				<FaGoogle />
				<p>Login via Google</p>
			</GoogleLogin>
		</Container>
	);
};

export default Login;
