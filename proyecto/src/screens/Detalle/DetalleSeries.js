import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import Loader from '../../components/Loader/Loader'

 export default class DetalleSeries extends Component {
    constructor(props){
        super(props)
        this.state ={
            detalleSerie: null,
            esFavoritoSerie: false
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({
        detalleSerie: data

}, () => {
     let storageFavSeries = localStorage.getItem('favoritos_serie')
    let arrParseado = JSON.parse(storageFavSeries)

    if(arrParseado !== null){
        let estaMiSerie = arrParseado.includes(this.state.detalleSerie.id)
        if(estaMiSerie){
            this.setState({
                esFavoritoSerie: true
            })
        }
    }
}))
    .catch(err => console.error(err))
}
agregarAFavoritos(idSerie){
    let storageFavSeries = localStorage.getItem('favoritos_serie')
    if(storageFavSeries === null){
        let arrIds = [idSerie]
        let arrStringnificado = JSON.stringify(arrIds)
        localStorage.setItem('favoritos_serie', arrStringnificado) 
    } else{
        let arrParseado= JSON.parse(storageFavSeries)
        arrParseado.push(idSerie)
        let arrStringificado = JSON.stringify(arrParseado)
          localStorage.setItem('favoritos_serie', arrStringificado)
    }
    this.setState({
        esFavoritoSerie: true
      })
}
sacarDeFavoritos(idSerie){
    let storageFavSeries = localStorage.getItem('favoritos_serie')
    let arrParseado = JSON.parse(storageFavSeries)
    let favsFiltrados = arrParseado.filter((id) => id !== idSerie)
    let arrStringificado = JSON.stringify(favsFiltrados)
    localStorage.setItem('favoritos_serie', arrStringificado)
    
    this.setState({
      esFavoritoSerie: false
    })
    
  }
render(){
            console.log(this.state.detalleSerie)
    return(

        <>
        { 
        this.state.detalleSerie !== null ?
        <div className='detalle'> 
            <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleSerie.poster_path}`} alt={this.state.detalleSerie.original_name}/>
            <h1 className='titulo1'>{this.state.detalleSerie.original_name}</h1>
            <h3 className = "texto1" > CALIFICACION: {this.state.detalleSerie.vote_average}</h3>
            <h3 className = "texto1" > FECHA DE ESTRENO: {this.state.detalleSerie.last_air_date}</h3>
            <h3 className = "texto1" > SINOPSIS: {this.state.detalleSerie.overview}</h3>
            <h3 className = "texto1" > GENERO: {this.state.detalleSerie.genres[0].name}</h3>
            <div>
                    {
                        this.state.esFavoritoSerie ?
                        <button className='botonBuscador' onClick={()=> this.sacarDeFavoritos(this.state.detalleSerie.id)}>
                        Sacar de favoritos
                        </button>  
                        :
                        <button classsName= "botonBuscador" onClick={()=> this.agregarAFavoritos(this.state.detalleSerie.id)}>
                        Agregar a favoritos
                        </button>
                    }
                </div>
        </div>:
            <Loader/>
        }   
        </>
    )
    
}}

