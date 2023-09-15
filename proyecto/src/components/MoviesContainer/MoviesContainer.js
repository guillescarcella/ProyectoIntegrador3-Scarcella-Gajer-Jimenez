import React, { Component } from 'react'
import './styles.css';
import Movie from '../Movie/Movie'
import Loader from '../Loader/Loader';
import MiForm from '../MiForm/MiForm';

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
                
                    this.props.movies.length === 0 ? 
                        <Loader/>
                    : 
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