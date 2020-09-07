import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import {NavItems} from './Navbar/NavItems';
import Button from "./Button/Button";
import Movies from './Movies/Movies';
import Pagination from './Pagination/Pagination';
import '../App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            totalMovies: 0,
            currentPage: 1,
            total_pages: 0,
        }
        this.apiKey = process.env.REACT_APP_API
        let urlId = window.location.pathname.slice(1)

        this.genre_id = NavItems.map(() => {
            if ((window.location.pathname === '/') || (window.location.pathname === '/Action')) {
                return '28'
            } else if (window.location.pathname === '/Animation') {
                return '16'
            } else if (window.location.pathname === '/Crime') {
                return '80'
            } else if (window.location.pathname === '/Drama') {
                return '18'
            } else if (window.location.pathname === '/Fantasy') {
                return '14'
            } else if (window.location.pathname === '/Horror') {
                return '27'
            }
        })
        if (window.location.pathname === '/') {
            this.genre_id.splice(1)
        }

        this.movie_title = NavItems.map((element) => {
            if (window.location.pathname === '/') {
                return 'Action'
            } else if (element['url'].includes(urlId)) {
                return (
                    element['title']
                )
            }
        })
        if (window.location.pathname === '/') {
            this.movie_title.splice(1)
        }
    }
    
    // Genres: Action (28), Animation (16), Crime (80), Drama (18), Fantasy (14), Horror (27)
    handleSubmit = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${this.genre_id}`)
        .then(data => data.json())
        .then(data => {
            this.setState({ movies: [...data.results], totalMovies: data.total_results, total_pages: data.total_pages })
        })
    }

    nextPage = (pageNum) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${this.genre_id}&page=${pageNum}`)
        .then(data => data.json())
        .then(data => {
            this.setState({ movies: [...data.results], currentPage: pageNum, total_pages: data.total_pages })
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        const numPages = Math.floor(this.state.totalMovies / 20);
        
        return (
            <div className='App'>
                <div className='hero'>
                    <Navbar handleSubmit={this.handleSubmit} />
                    <div className='hero-img'>
                        <div className='hero-text'>
                            <h1 className='movie-title'>{this.movie_title}</h1>
                            <Button handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
                <div className='main'>
                    <div className='header'>
                        <h2 className='title-black'>{this.movie_title} Movies</h2>
                        <ul className='genre-titles-main-mobile'>
                            <li className='genre-titles-list-mobile'>
                                <a href='/' className='genre-titles-link-mobile'>ACTION</a>
                            </li>
                            <li className='genre-titles-list-mobile'>
                                <a href='/Animation' className='genre-titles-link-mobile'>ANIMATION</a>
                            </li>
                            <li className='genre-titles-list-mobile'>
                                <a href='/Crime' className='genre-titles-link-mobile'>CRIME</a>
                            </li>
                            <li className='genre-titles-list-mobile'>
                                <a href='/Drama' className='genre-titles-link-mobile'>DRAMA</a>
                            </li>
                            <li className='genre-titles-list-mobile'>
                                <a href='/Fantasy' className='genre-titles-link-mobile'>FANTASY</a>
                            </li>
                            <li className='genre-titles-list-mobile'>
                                <a href='/Horror' className='genre-titles-link-mobile'>HORROR</a>
                            </li>
                        </ul>
                        <p>Hoc subliminal nuntium. Pauxillum aquæ mihi ad officium. Non possum dicere linguam Latinam. Google fuerit interpres ut errorem.</p>
                    </div>
                    <div className='movies'>
                        <Movies movies={this.state.movies} />
                    </div>
                    <div className='pagination'>
                        {this.state.totalMovies > 20 ? <Pagination pages={numPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;