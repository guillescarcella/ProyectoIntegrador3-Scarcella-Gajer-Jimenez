import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state ={
            valor: [],
            favoritos:false
        }
    }

componentDidMount(){
    let listaPelisFavoritas = [];
    listaPelisFavoritas = JSON.parse(localStorage.getItem('peliculas_favoritas'));
    console.log(listaPelisFavoritas);
    if(listaPelisFavoritas && listaPelisFavoritas.includes(parseInt(this.props.match.params.id))){
        this.setState({textoFavoritos: "Eliminar de favoritos"})
    } else {
        this.setState({textoFavoritos: "Agregar a favoritos"})
    }
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({ 
        imagen: data.poster_path,
        nombre: data.title,
        calificacion: data.vote_average,
        fecha: data.realease_date,
        duracion: data.runtime,
        sinopsis: data.overview,
        genero: data.genres[0].name
    }))
    
    .catch(err => console.error(err))
}

favoritos(){
    console.log('clickeo');
    let listaPelisFavoritas = [];
    let listaLocalStorage = []
    if(localStorage.getItem('peliculas_favoritas') !== null){
        listaLocalStorage = JSON.parse(localStorage.getItem('peliculas_favoritas'))
    }
    let listaFinal = [];
    if(listaLocalStorage !== null){
        listaPelisFavoritas = listaLocalStorage;
    }
    if(listaPelisFavoritas.includes(parseInt(this.props.match.params.id))){
        console.log('sacar de favoritos');
        this.setState({textoFavoritos: "Agregar a favoritos"});
        listaFinal = listaPelisFavoritas.filter((queda) => queda !== parseInt(this.props.match.params.id));
    } else {
        console.log('agregar a favoritos');
        this.setState({textoFavoritos: "Eliminar de favoritos"});
        listaFinal = listaPelisFavoritas;
        listaFinal.push(parseInt(this.props.match.params.id));
    }
    localStorage.setItem('peliculas_favoritas', JSON.stringify(listaFinal));
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
            <div>
                <h3 className = "detalle" onClick={() => this.favoritos()}>{this.state.textoFavoritos}</h3>
            </div>
        </div>
    )}}