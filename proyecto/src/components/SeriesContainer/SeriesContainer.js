import React, { Component } from 'react'
import './styles.css';
import Serie from '../Serie/Serie'

class SeriesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className='series-container'>
                    { 
                this.props.series.length === 0 ? 
                <h1>  </h1>: //noc porque no funciona
                this.props.series.map((serie) =>
                <Serie
                id= {serie.id}
                nombre={serie.name}
                imagen={serie.poster_path}
                descripcion={serie.overview}
                />
                )
             }
                </div>
                
            </>
        )
    }
}

export default SeriesContainer