import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class DetalleSeries extends Component {
    constructor(props){
        super(props)
        this.state ={
            valor: [],
            favoritos:false
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({
        imagen: data.poster_path,
        nombre: data.original_name,
        calificacion: data.vote_average,
        fecha: data.last_air_date,
        sinopsis: data.overview,
        genero: data.genres[0].name
}))
    .catch(err => console.error(err))
}


render(){
    return(
        <div> 
            <img src={`https://image.tmdb.org/t/p/w500/${this.state.imagen}`} alt={this.state.nombre}/>
            <h1>{this.state.nombre}</h1>
            <h3 className = "detalle" >{this.state.calificacion}</h3>
            <h3 className = "detalle" >{this.state.fecha}</h3>
            <h3 className = "detalle" >{this.state.duracion}</h3>
            <h3 className = "detalle" >{this.state.sinopsis}</h3>
            <h3 className = "detalle" >{this.state.genero}</h3>
            
        </div>
    )
}}

