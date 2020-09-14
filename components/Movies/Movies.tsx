import React from "react";
import {
	MovieContainer,
	MovieCard,
	MovieCover,
	MovieTitle,
	MovieContent,
} from "./styles";
import Link from "next/link";

type Movies = {
	movies: any[];
};

const Movies = ({ movies }: Movies) => {
	if (movies === undefined) return <h1>No movies</h1>;

	return (
		<MovieContainer>
			{movies &&
				movies.map(movie => {
					return (
						<MovieCard key={movie.imdbID}>
							<MovieCover src={movie.Poster} />
							<MovieContent>
								<Link href="/">
									<MovieTitle>{movie.Title}</MovieTitle>
								</Link>
							</MovieContent>
						</MovieCard>
					);
				})}
		</MovieContainer>
	);
};

export default Movies;
