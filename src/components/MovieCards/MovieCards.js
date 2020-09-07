import React from 'react';
import './MovieCards.css'

const MovieCards = (props) => {
		return (
			<div className='card'>
				<div className='card-image'>
					{
						props.image == null ? <img src={process.env.PUBLIC_URL + '/assets/images/logo-01.png'} alt='logo' className='no-img' /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt='movie poster' className='movie-img' />
					}
				</div>
				<div className='info'>
					<div className='title'>{props.title}</div>
					<div className='vote_average'>Average Rating: {props.vote_average} </div>
				</div>
			</div>
		)
}

export default MovieCards;