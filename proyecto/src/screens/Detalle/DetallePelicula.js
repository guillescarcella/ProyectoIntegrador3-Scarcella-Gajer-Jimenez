import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'

 export default class DetallePelicula extends Component {
    constructor(props){
        super(props)
        this.state ={
            valor: [],
            esFavorito: false
        }
    }

componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`, options)
    .then(response => response.json())
    .then(data => this.setState({ 
        imagen: data.poster_path,
        nombre: data.title,
        calificacion: data.vote_average,
        fecha: data.release_date,
        duracion: data.runtime,
        sinopsis: data.overview,
        genero: data.genres[0].name
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
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${this.state.imagen}`} alt={this.state.nombre}/>           
            <h1>{this.state.nombre}</h1>
            <h3 className = "detalle" >{this.state.calificacion}</h3>
            <h3 className = "detalle" >{this.state.fecha}</h3>
            <h3 className = "detalle" >{this.state.duracion}</h3>
            <h3 className = "detalle" >{this.state.sinopsis}</h3>
            <h3 className = "detalle" >{this.state.genero}</h3>
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
    )}}