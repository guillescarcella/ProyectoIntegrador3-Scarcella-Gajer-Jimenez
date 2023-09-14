import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'

 export default class index extends Component {
    constructor(props){
        super(props)
        this.state ={
            movies: [], 
            backup: [],
            page:1
        }
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options) //poner todas las peliculas
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results,
            backup: data.results  
        }))
        
        .catch(err => console.error(err));
}
TraerMasMovies(){
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${this.state.page + 1}&sort_by=popularity.desc`, options)
    .then(response => response.json())
    .then(data=> this.setState({
        movies: this.state.movies.concat(data.results),
        backup: this.state.backup.concat(data.results),
        page: this.state.page + 1
    }))
}

filtrarMovies(nombre){
    let moviesFiltradas = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
        movies: moviesFiltradas
    })
}

render(){
    return(
        <div>
            <h1 className='barras'> PELICULAS </h1>
            {/* FALTA EL FORM DE BUSCAR PELICULAS */}
            <MoviesContainer movies={this.state.movies}/>
            <button onClick={()=> this.TraerMasMovies()}> Cargar mas peliculas </button>
            
        </div>
    )
}


}