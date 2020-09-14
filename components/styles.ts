import styled from "styled-components";

export const InputContainer = styled.header`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	padding: 3em 0 0;
`;

export const Input = styled.input`
	padding: 0.5em 1em;
	border-radius: 5px;
`;
export const Button = styled.button`
	padding: 0.7em 2em;
	margin-left: 1em;
	background-color: #3b2c85;
	border: none;
	border-radius: 5px;
	text-transform: uppercase;
	cursor: pointer;
	color: #fff;
	letter-spacing: 0.3em;
`;

export const NavBar = styled.nav`
	width: 100%;
	padding: 1em 3em;
	border-top: 1px solid ${({ theme }) => theme.colors.terciary1};
	border-bottom: 1px solid ${({ theme }) => theme.colors.terciary1};
`;

export const Logo = styled.a`
	color: #fff;
	text-decoration: none;
	font-size: 2em;
`;
