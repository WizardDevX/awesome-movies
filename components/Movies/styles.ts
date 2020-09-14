import styled from "styled-components";

export const MovieContainer = styled.section`
	display: flex;
	width: 80%;
	margin: 3em auto auto;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

export const MovieCard = styled.div`
	margin: 1em;
	height: 500px;
	width: 300px;
	background-color: ${({ theme }) => theme.colors.secondary1};
	border: 1px solid ${({ theme }) => theme.colors.terciary1};
`;

export const MovieCover = styled.img`
	width: 100%;
	height: 80%;
	object-fit: cover;
`;

export const MovieContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20%;
	padding: 0.5em;
`;

export const MovieTitle = styled.a`
	text-decoration: none;
	color: #fff;
	font-size: 1.5em;
	cursor: pointer;
`;
