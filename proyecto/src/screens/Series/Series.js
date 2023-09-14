import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class index extends Component {
    constructor(props){
        super(props)
        this.state ={ 
            series:[],
            backup:[],
            page:1
        }
    }

componentDidMount(){    
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => this.setState({
            series: data.results,
            backup:data.results
        }))
        .catch(err => console.error(err));
}

TraerMasSeries(){
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${this.state.page + 1}&sort_by=popularity.desc`, options)
    .then(response => response.json())
    .then(data=> this.setState({
        series: this.state.series.concat(data.results),
        backup: this.state.backup.concat(data.results),
        page: this.state.page + 1
    }))
}

filtrarSeries(nombre){
    let seriesFiltradas = this.state.backup.filter((elm) => elm.title.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
        series: seriesFiltradas
    })
}

render(){
    return(
        <div>
            <h1 className='barras'> SERIES </h1>
            {/* FALTA EL FORM DE BUSCAR PELICULAS */}
            <SeriesContainer series={this.state.series}/>
            <button onClick={()=> this.TraerMasSeries()}> Cargar mas series  </button>
        </div>
    )
}


}