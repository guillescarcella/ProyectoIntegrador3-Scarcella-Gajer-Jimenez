import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class DetalleSeries extends Component {
    constructor(props){
        super(props)
        this.state ={
            detalleSerie: null,
            favoritos:false
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({
        detalleSerie: data

}))
    .catch(err => console.error(err))
}


render(){
            console.log(this.state.detalleSerie)
    return(

        <>
        { 
        this.state.detalleSerie !== null ?
        <div> 
            <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleSerie.poster_path}`} alt={this.state.detalleSerie.original_name}/>
            <h1>{this.state.detalleSerie.original_name}</h1>
            <h3 className = "detalle" >{this.state.detalleSerie.vote_average}</h3>
            <h3 className = "detalle" >{this.state.detalleSerie.last_air_date}</h3>
            <h3 className = "detalle" >{this.state.detalleSerie.overview}</h3>
            <h3 className = "detalle" >{this.state.detalleSerie.genres[0].name}</h3>
        </div>:
            <h2>hola</h2>
        }   
        </>
    )
    
}}

