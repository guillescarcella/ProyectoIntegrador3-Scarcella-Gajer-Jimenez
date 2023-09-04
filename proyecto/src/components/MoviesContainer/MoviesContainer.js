import React, { Component } from 'react'
import Movie from '../Movie/Movie'

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='movies'>
                    { 
                this.props.movies.length === 0 ?
                <h1> Peliculas </h1> :
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