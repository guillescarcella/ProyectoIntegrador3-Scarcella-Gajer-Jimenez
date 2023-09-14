import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'



 export default class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state ={
            detalleMovie: null,
            esFavorito: false
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({ 
        detalleMovie: data
    } , () => {

        let storageFav = localStorage.getItem('favoritos')
        let arrParseado = JSON.parse(storageFav)
    
        if(arrParseado !== null){
            let estaMiPelicula = arrParseado.includes(this.props.id)
            if(estaMiPelicula){
                this.setState({
                    esFavorito: true
                })
            }
        }

    }))
    .catch(err => console.error(err))

   
}

agregarAFavoritos(idPelicula){
    let storageFav = localStorage.getItem('favoritos')
    if(storageFav === null){
        let arrIds = [idPelicula]
        let arrStringnificado = JSON.stringify(arrIds)
        localStorage.setItem('favoritos', arrStringnificado) 
    } else{
        let arrParseado= JSON.parse(storageFav)
        arrParseado.push(idPelicula)
        let arrStringificado = JSON.stringify(arrParseado)
          localStorage.setItem('favoritos', arrStringificado)
    }
    this.setState({
        esFavorito: true
      })
}

sacarDeFavoritos(idPelicula){
    let storageFav = localStorage.getItem('favoritos')
    let arrParseado = JSON.parse(storageFav)
    let favsFiltrados = arrParseado.filter((id) => id !== idPelicula)
    let arrStringificado = JSON.stringify(favsFiltrados)
    localStorage.setItem('favoritos', arrStringificado)
    this.setState({
      esFavorito: false
    })
    
  }

render(){
    return(
    <>
        {
            this.state.detalleMovie !== null ?
            <div className='detalle'>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.detalleMovie.poster_path}`} alt={this.state.detalleMovie.title}/>           
                <h1 className='titulo1'>{this.state.detalleMovie.title}</h1>
                <h3 className = "texto1" > CALIFICACION: {this.state.detalleMovie.vote_average}</h3>
                <h3 className = "texto1" > FECHA DE ESTRENO: {this.state.detalleMovie.release_date}</h3>
                <h3 className = "texto1" > DURACION: {this.state.detalleMovie.runtime}</h3>
                <h3 className = "texto1" > SINOPSIS: {this.state.detalleMovie.overview}</h3>
                <h3 className = "texto1" > GENERO: {this.state.detalleMovie.genres[0].name}</h3>
                <div>
                    {
                        this.state.esFavorito ?
                        <button onClick={()=> this.sacarDeFavoritos(this.props.id)}>
                        Sacar de favoritos
                        </button>  
                        :
                        <button onClick={()=> this.agregarAFavoritos(this.props.id)}>
                        Agregar a favoritos
                        </button>
                    }
                </div>
        
            </div>
            : 
            <h2>Buscando Pelicula</h2>
        }
    </>
)}}