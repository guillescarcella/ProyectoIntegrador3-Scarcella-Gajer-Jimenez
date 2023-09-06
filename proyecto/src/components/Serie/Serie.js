import {Component} from "react"
import './styles.css';
import {Link} from "react-router-dom";

class Serie extends Component {
    constructor(props){
        super(props)
        this.state={
        } // aca va lo de favoritos
    }

    render(){
        return(
            <div className="serie">
                <Link to={`/serie/id/${this.props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} alt={this.props.nombre}/>
                </Link>
                    <h3 className="titulos"> {this.props.nombre}</h3>
                    <a href="/" className="boton"> Ver más </a>
                    <h5 className="descripcion"> {this.props.descripcion}</h5>
                    <a href="/detalle/id/" className="boton"> Ir a detalle </a>
            </div>
            
            
        )
    }
}

export default Serie