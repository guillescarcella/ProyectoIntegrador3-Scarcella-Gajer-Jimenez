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
            <h1 className='titulo'> SERIES POPULARES </h1>
                <div className='series-container'>
                    { 
                this.props.series.length === 0 ? 
                <h1 className='titulo'> Series </h1>: //noc porque no funciona
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
                <a href="/series" className="boton"> Ver Todas </a>
            </>
        )
    }
}

export default SeriesContainer