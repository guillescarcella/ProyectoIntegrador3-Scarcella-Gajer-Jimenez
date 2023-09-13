import React, { Component } from 'react'
import './styles.css';
import Serie from '../Serie/Serie'
import Loader from '../Loader/Loader';

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
                        <Loader/>
                    :

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