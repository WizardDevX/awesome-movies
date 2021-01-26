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


const IndexPage = ({ data }: any) => {
	const [movies, setMovies] = useState<any[]>(data);
	const [search, setSearch] = useState<string>("");

	const findMovie = async () => {
		if (search === "") return;

		const res = await axios.get(`/api/movies?movie=${search}`);
		setMovies(res.data);
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

export const getStaticProps: GetStaticProps = async (_) => {
	console.log(process.env.API_KEY)
	const { data } = await axios.get(`http://www.omdbapi.com/?s=naruto&apikey=${process.env.API_KEY}`);

	return {
		props: {
			data: data.Search,
		},
	};
};
