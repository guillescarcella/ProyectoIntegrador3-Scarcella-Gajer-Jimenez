import React, { Component } from 'react'
import './styles.css';
import Movie from '../Movie/Movie'

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            
                <div className='movies-container'>
                    { 
                this.props.movies.length === 0 ? 
                <h1 > </h1>: //noc porque no funciona
                this.props.movies.map((movie) =>
                <Movie
                id= {movie.id}
                nombre={movie.title}
                imagen={movie.poster_path}
                descripcion={movie.overview}
                />
                )
             }
                </div>
                
            </>
        )
    }
}

export default MoviesContainer