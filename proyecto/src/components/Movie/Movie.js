import React, {Component} from "react"
import './styles.css';
import {Link} from "react-router-dom";

class Movie extends Component {
    constructor(props){
        super(props)
        this.state={
            valor: ''
        } // aca va lo de favoritos
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({valor: event.target.value});
        console.log(event)
    }

    render(){
        return(
        <React.Fragment>
            <div className="pelicula">
                <Link to={`/movie/id/${this.props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} alt={this.props.nombre}/>
                </Link>
                    <h3 className="titulos"> {this.props.nombre}</h3>
                    <h5 className="descripcion"> {this.props.descripcion}</h5>
            </div>
            
        </React.Fragment>
        )
    }
}

export default Movie