import React from 'react';
import MovieCards from '../MovieCards/MovieCards';
import './Movies.css'

const Movies = (props) => {
	return (
		<div className='movie-grid'>
			{
				props.movies.map((movie, i) => {
					
					return (
						<MovieCards key={i} image={movie.poster_path} title={movie.title} vote_average={movie.vote_average} genre_ids={movie.genre_ids} />
					)
				})
			}
		</div>
	)
}

export default Movies;