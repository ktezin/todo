import React from "react";
import styled from "styled-components";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h2``;

const GoogleLogin = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: red;
	color: white;
	border: 1px solid lightgrey;
	border-radius: 0.3rem;
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	text-decoration: none;
	font-weight: 700;
	height: 4rem;
	width: 16rem;
	margin-bottom: 0.2rem;
`;

const GitHubLogin = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	color: white;
	border: 1px solid lightgrey;
	border-radius: 0.3rem;
	padding-right: 0.5rem;
	padding-left: 0.5rem;
	text-decoration: none;
	font-weight: 700;
	height: 4rem;
	width: 16rem;
`;

const Login = () => {
	return (
		<Container>
			<Title>Login</Title>
			<GoogleLogin href="/api/auth/google">
				<FaGoogle style={{ marginRight: "0.2rem" }} size={"20"} />
				<p>Login via Google</p>
			</GoogleLogin>
			<GitHubLogin href="/api/auth/github">
				<FaGithub style={{ marginRight: "0.2rem" }} size={"20"} />
				<p>Login via Github</p>
			</GitHubLogin>
		</Container>
	);
};

export default Login;
