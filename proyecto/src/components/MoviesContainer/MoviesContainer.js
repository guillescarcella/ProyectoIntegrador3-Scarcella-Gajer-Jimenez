import React, { Component } from 'react'
import './styles.css';
import Movie from '../Movie/Movie'
import Loader from '../Loader/Loader';

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.movies)
        return (
            <>
            
                <div className='movies-container'>
                    { 
                this.props.movies ? (
                this.props.movies.length === 0 ? 
                 <h2>No hay favoritos</h2>
                : //noc porque no funciona
                this.props.movies.map((movie) =>
                <Movie
                id= {movie.id}
                nombre={movie.title}
                imagen={movie.poster_path}
                descripcion={movie.overview}
                />
                )):
                <Loader/>
             }
                </div>
                
            </>
        )
    }
}

export default MoviesContainer