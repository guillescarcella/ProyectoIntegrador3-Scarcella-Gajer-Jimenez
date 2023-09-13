import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state ={
            pelisFavoritos:[]
        }
    }

componentDidMount(){
        let storageFavs = localStorage.getItem('pelisFavoritos') 
        
        if(storageFavs !== null){
            let favsParseados = JSON.parse(storageFavs)
            Promise.all(
                favsParseados.map(id =>
                    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'+ id) 
                    .then(resp => resp.json())
                )
            )
        }
}

actualizarState(id){
    let stateActualizado = this.state.pelisFavoritos.filter(elm => elm.id != id)
    this.setState({
        pelisFavoritos: stateActualizado
    })
}
render(){
    return(
        <div>
            <h1 className='barras'> PELICULAS POPULARES FAVORITAS </h1>
            {
            this.state.pelisFavoritos.length > 0
                ? <MoviesContainer actualizarState={(id)=> this.actualizarState(id)} movies={this.state.pelisFavoritos} />: 
                <h2 className='favoritos'>No hay Peliculas Favoritas</h2>
            }
            
            
            
        </div>
    )}}