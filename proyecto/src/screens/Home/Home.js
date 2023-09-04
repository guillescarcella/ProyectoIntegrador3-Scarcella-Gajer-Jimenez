import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer'

 export default class index extends Component {
    constructor(props){
        super(props)
        this.state ={
            movies: [] 
        }
    }

componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(data => this.setState({
            movies: data.results   
        }))
        
        .catch(err => console.error(err));
    
    /*fetch('', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));*/
}
render(){
    return(
        <div>
            <MoviesContainer movies={this.state.movies}/>
        </div>
    )
}


}


