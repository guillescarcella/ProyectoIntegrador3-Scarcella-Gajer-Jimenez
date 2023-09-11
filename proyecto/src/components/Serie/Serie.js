import {Component} from "react"
import './styles.css';
import {Link} from "react-router-dom";

class Serie extends Component {
    constructor(props){
        super(props)
        this.state={
            valor: " ",
            mostrar: false,
            mensaje: 'Ver descripcion'
        } 
    }
    descripcion(){
        console.log('entro');
        if(this.state.mostrar == true){this.setState({mostrar: false, mensaje: 'Ver descripcion'})}
        else {this.setState({mostrar: true, mensaje: 'Ocultar descripcion'})}
    }
    render(){
        return(
            <div className="serie">
                <Link to={`/serie/id/${this.props.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.imagen}`} alt={this.props.nombre}/>
                </Link>
                    <h3 className="titulos"> {this.props.nombre}</h3>
                    <p className="botonSerie" onClick={() => this.descripcion ()}>{this.state.mensaje}</p>
                    {this.state.mostrar ? <h5 className="descripcion">{this.props.descripcion}</h5> : ""}
                    <Link className="botonSerie" to={`/detalleSeries/id/${this.props.id}`}>Ir a detalle</Link>
            </div>
            
            
        )
    }
}

export default Serie