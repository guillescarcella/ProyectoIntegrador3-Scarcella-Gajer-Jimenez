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
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} alt={this.props.nombre}/>
                    <h3 className="titulos"> {this.props.nombre}</h3>
                    <Link className="boton" to="/">Ver más</Link>
                    <h5 className="descripcion"> {this.props.descripcion}</h5>
                    <Link className="boton"to={`/detallePelicula/id/${this.props.id}`}>Ir a detalle</Link>
                    
            </div>
            
        </React.Fragment>
        )
    }
}

export default Movie