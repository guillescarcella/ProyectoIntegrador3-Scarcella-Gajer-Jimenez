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
    let listaSeriesFavoritas = [];
    listaSeriesFavoritas = JSON.parse(localStorage.getItem('series_favoritas'));
    console.log(listaSeriesFavoritas);
    if(listaSeriesFavoritas && listaSeriesFavoritas.includes(parseInt(this.props.match.params.id))){
        this.setState({textoFavoritos: "Eliminar de favoritos"})
    } else {
        this.setState({textoFavoritos: "Agregar a favoritos"})
    }
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
favoritos(){
    console.log('clickeo');
    let listaSeriesFavoritas = [];
    let listaLocalStorage = []
    if(localStorage.getItem('series_favoritas') !== null){
        listaLocalStorage = JSON.parse(localStorage.getItem('series_favoritas'))
    }
    let listaFinal = [];
    if(listaLocalStorage !== null){
        listaSeriesFavoritas = listaLocalStorage;
    }
    if(listaSeriesFavoritas.includes(parseInt(this.props.match.params.id))){
        console.log('sacar de favoritos');
        this.setState({textoFavoritos: "Agregar a favoritos"});
        listaFinal = listaSeriesFavoritas.filter((queda) => queda !== parseInt(this.props.match.params.id));
    } else {
        console.log('agregar a favoritos');
        this.setState({textoFavoritos: "Eliminar de favoritos"});
        listaFinal = listaSeriesFavoritas;
        listaFinal.push(parseInt(this.props.match.params.id));
    }
    localStorage.setItem('series_favoritas', JSON.stringify(listaFinal));
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
    )
}}

