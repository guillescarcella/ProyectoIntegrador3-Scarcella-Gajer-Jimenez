import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state ={
            valor: [],
            favoritos:false,
            pelisFavoritas: [],
            seriesFavoritas: [],
           
            
        }
    }

componentDidMount(){

    let listaPelisFavoritas = [];
    listaPelisFavoritas = JSON.parse(localStorage.getItem("peliculas_favoritas"));
    if(listaPelisFavoritas === null || listaPelisFavoritas === []){
        this.setState({
            pelisFavoritas: []
        })
       console.log("el array de peliculas favoritas esta vacio");
      }
      else {
    listaPelisFavoritas.map((id)=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then(response => response.json())
    .then(data => {
        let listaDatos = this.state.pelisFavoritas;
        listaDatos.push(data);
        this.setState({pelisFavoritas: listaDatos}, console.log(this.state))
    }
    )
    .catch(err => console.error(err))
    })}

    let listaSeriesFavoritas = [];
    listaSeriesFavoritas = JSON.parse(localStorage.getItem("series_favoritas"));

      if(listaSeriesFavoritas === null || listaSeriesFavoritas === []){
        this.setState({
            seriesFavoritas: []
        })
        console.log("el array de series favoritas esta vacio");
      }
      else {
        listaSeriesFavoritas.map((id)=>{
            fetch(`https://api.themoviedb.org/3/tv/${id}`, options)
            .then(response => response.json())
            .then(data => {
                let listaDatos = this.state.seriesFavoritas;
                listaDatos.push(data);
                this.setState({seriesFavoritas: listaDatos}, console.log(this.state))
            }
            )
            .catch(err => console.error(err))
            })
        }
}
render(){
    return(
        <div>
            <h1 className='barras'> PELICULAS POPULARES FAVORITAS </h1>
            {
            this.state.pelisFavoritas.length > 0
                ? <MoviesContainer movies={this.state.pelisFavoritas}/>: 
                <h2 className='favoritos'>No hay Peliculas Favoritas</h2>
            }
            <h1 className='barras'> SERIES POPULARES FAVORITAS </h1>
            {
            this.state.seriesFavoritas.length > 0
                ? <SeriesContainer series={this.state.seriesFavoritas}/>:
                <h2 className='favoritos'>No hay Series Favoritas</h2>
            }
            
            
        </div>
    )}}