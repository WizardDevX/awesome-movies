import React, { useState } from "react";
import Layout from "../components/Layout";
import Movies from "../components/Movies/Movies";
import {
	InputContainer,
	Input,
	Button,
	NavBar,
	Logo,
} from "../components/styles";
import axios from "axios";
import { GetStaticProps } from "next";

const fetchMovies = async (movie: string = "Naruto") => {
	axios.defaults.baseURL = "http://www.omdbapi.com";
	const { data } = await axios.get(
		`/?s=${movie}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
	);

	return data.Search;
};

const IndexPage = ({ data }: any) => {
	const [movies, setMovies] = useState<any[]>(data);
	const [search, setSearch] = useState<string>("");

	const findMovie = async () => {
		if (search === "") return;
		setMovies(await fetchMovies(search));
		setSearch("");
	};

	return (
		<Layout>
			<NavBar>
				<Logo href="/">Awesome Movies</Logo>
			</NavBar>
			<InputContainer>
				<Input
					value={search}
					placeholder="Find your movies"
					onChange={e => setSearch(e.target.value)}
				/>
				<Button onClick={findMovie}>Find</Button>
			</InputContainer>

			<Movies movies={movies} />
		</Layout>
	);
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ctx => {
	const movies = await fetchMovies();

	return {
		props: {
			data: movies,
		},
	};
};
