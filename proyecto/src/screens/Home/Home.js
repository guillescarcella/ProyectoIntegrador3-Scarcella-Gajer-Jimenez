import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class index extends Component {
    constructor(props){
        super(props)
        this.state ={
            movies: [], 
            series:[],
            resultados: [],
            valor: ""
        }
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results.slice(0,5)   
        }))
        
        .catch(err => console.error(err));
    
    fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => this.setState({
            series: data.results.slice(0,5)
        }))
        .catch(err => console.error(err));
}

controlarCambios (e){
    this.setState({valor: e.target.value},() =>{
        this.mostrarBusqueda()
    })
}

mostrarBusqueda (){
    if (this.state.valor !== ''){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.valor}`, options)
        .then (response => response.json())
        .then (data => this.setState({
            resultados: data.results.slice(0,5)
        }, () => console.log(this.state)))
        .catch(err => console.error(err));
    }
}
render(){
    return(
        <div>
            <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <label>Buscador</label>
                    <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                    <input type="submit" value="Submit" />
            </form>
            {this.state.valor === '' ? 
            <>
            <h1 className='titulo'> PELICULAS POPULARES </h1>
            <MoviesContainer movies={this.state.movies}/>
            <a href="/peliculas" className="boton"> Ver Todas </a> 
            <h1 className='titulo'> SERIES POPULARES </h1>
            <SeriesContainer series={this.state.series}/>
            <a href="/series" className="boton"> Ver Todas </a>
            </>
            :
            <>
            <h1>Resultado de busqueda de peliculas</h1>
            {<MoviesContainer movies={this.state.resultados}/>}

            </>
        }
        </div>
    )
}


}


