import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'
import './styles.css';

 export default class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state ={
            favoritos:[],
            favoritos_serie: []
        }
    }

componentDidMount(){
        let storageFavs = localStorage.getItem('favoritos') 
        let storageFavSeries = localStorage.getItem('favoritos_serie')
        
        if(storageFavs !== null){
            let favsParseados = JSON.parse(storageFavs)
            Promise.all(
                favsParseados.map(id =>
                    fetch('https://api.themoviedb.org/3/movie/' + id) 
                    .then(resp => resp.json())
                )
            )
            .then( data => this.setState({favoritos: data}))
            .catch(err => console.log(err))
        }
        if(storageFavSeries !== null){
            let favsParseados = JSON.parse(storageFavSeries)
            Promise.all(
                favsParseados.map(id =>
                    fetch('https://api.themoviedb.org/3/tv/' + id) 
                    .then(resp => resp.json())
                )
            )
            .then( data => this.setState({favoritos_serie: data}))
            .catch(err => console.log(err))
        }

}

actualizarState(id){
    let stateActualizado = this.state.favoritos.filter(elm => elm.id !== id)
    this.setState({
      favoritos: stateActualizado
    })
  }
  actualizarStateSerie(id){
    let stateActualizadoSerie = this.state.favoritos_serie.filter(elm => elm.id !== id)
    this.setState({
        favoritos_serie: stateActualizadoSerie
    })
  }
render(){
    return(
        <>
        <div>
            <h1 className='barras'> PELICULAS POPULARES FAVORITAS </h1>
            {
                this.state.favoritos.length > 0 ?
                <MoviesContainer actualizarState ={(id)=> this.actualizarState(id)} movies ={this.state.favoritos} />
                :<h2 className= "frase"> No hay Peliculas Favoritas</h2>
            }
        </div>
        <div>
            <h1 className='barras'> SERIES POPULARES FAVORITAS </h1>
            {   this.state.favoritos_serie.length > 0 ?
                <SeriesContainer actualizarStateSerie ={(id)=> this.actualizarStateSerie(id)} series ={this.state.favoritos_serie} />
                : <h2 className= "frase"> No hay Series Favoritas</h2>
            }
                </div>
        </>
    )}}