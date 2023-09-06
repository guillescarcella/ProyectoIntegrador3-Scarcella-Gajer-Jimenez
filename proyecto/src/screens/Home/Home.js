import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class index extends Component {
    constructor(props){
        super(props)
        this.state ={
            movies: [], 
            series:[]
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
render(){
    return(
        <div>
            <MoviesContainer movies={this.state.movies}/>
            <SeriesContainer series={this.state.series}/>
        </div>
    )
}


}


