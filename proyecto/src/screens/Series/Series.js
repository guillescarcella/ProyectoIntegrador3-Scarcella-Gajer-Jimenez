import React, {Component} from 'react'
import {options} from '../../configuracionAPI/constants'
import SeriesContainer from '../../components/SeriesContainer/SeriesContainer'

 export default class index extends Component {
    constructor(props){
        super(props)
        this.state ={ 
            series:[]
        }
    }

componentDidMount(){    
    fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(data => this.setState({
            series: data.results
        }))
        .catch(err => console.error(err));
}
render(){
    return(
        <div>
            <SeriesContainer series={this.state.series}/>
        </div>
    )
}


}