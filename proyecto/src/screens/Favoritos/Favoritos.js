import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

export default class Favoritos extends Component {
    constructor (props){
        super (props)
        this.state = {
            valor: [],
            favoritos: false,
            pelisFavoritas: []
        }
    }
componentDidMount(){
    let listaPelisFavoritas = [];
    let listaSeriesFavoritas = [];
    listaPelisFavoritas = JSON.parse(localStorage.getItem("peliculas_favoritas"));
    listaSeriesFavoritas = JSON.parse(localStorage.getItem("series_favoritas"));

    listaPelisFavoritas.map ((id) => {
        fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
        .then (response => response.json())
        .then (data => {
            let listaDatos = this.state.pelisFavoritas;
            listaDatos.push(data);
            this.setState({ pelisFavoritas: listaDatos}, console.log(this.state))

        })
        .catch(err => console.error(err))
    })
    listaSeriesFavoritas.map((id)=>{
        fetch(`https://api.themoviedb.org/3/tv/${id}`, options)
        .then(response => response.json())
        .then(data => {
            let listaDatos = this.state.listaSeriesFavoritas;
            listaDatos.push(data);
            this.setState({listaSeriesFavoritas: listaDatos}, console.log(this.state))
        }
        )
        .catch(err => console.error(err))
        })
} 
render (){
    return (
        <div>
            <h1 className='titulo'> PELICULAS POPULARES FAVORITAS </h1>
            <MoviesContainer movies={this.state.pelisFavoritas}/>
        </div>
    )
}}