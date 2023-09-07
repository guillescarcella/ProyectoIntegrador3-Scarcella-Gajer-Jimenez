import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state ={
            foto: "", 
            nombre: "",
            calificacion: "",
            fecha: "",
            duracion: "",
            sinopsis: "",
            genero: "",
            favoritos:false
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({ 
        foto: data.poster_path,
        nombre: data.title,
        calificacion: data.vote_average,
        fecha: data.realease_date,
        duracion: data.runtime,
        sinopsis: data.overview,
        genero: data.genres[0].name
    }))
    
    .catch(err => console.error(err))
}
render(){
    return(
        <div>

            <h1>{this.state.nombre}</h1>
            <h3 className = "detalle" >{this.state.calificacion}</h3>
            <h3 className = "detalle" >{this.state.fecha}</h3>
            <h3 className = "detalle" >{this.state.duracion}</h3>
            <h3 className = "detalle" >{this.state.sinopsis}</h3>
            <h3 className = "detalle" >{this.state.genero}</h3>

        </div>
    )
}}