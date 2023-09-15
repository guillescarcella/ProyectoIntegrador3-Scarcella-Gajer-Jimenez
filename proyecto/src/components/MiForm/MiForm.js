import { Component } from "react";
import './styles.css';

class MiForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    evitarSubmit(evento){
        evento.preventDefault()
    }

    guardarValor(evento){
        this.setState(
            {
                valorInput: evento.target.value
            },
            () => this.props.filtrarPeliculas(this.state.valorInput)
        )
    }

    render(){
        return(
            <>
            <form  onSubmit={(evento)=> this.evitarSubmit(evento)}>
                <input className="buscador" onChange={(evento)=> this.guardarValor(evento)} value={this.state.valorInput}/>
                <button className="botonBuscador">Filtrar</button>
            </form>
            </>
        )
    }
}

export default MiForm