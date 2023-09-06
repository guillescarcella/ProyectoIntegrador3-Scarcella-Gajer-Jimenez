import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class Header extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render() {
        return(
            
            <nav className="header">
            <img className= "imagen"src="./logo512" alt="logo"></img>
                 <Link className="link" to="/" exact="estrenos">Home</Link> 
                 <Link className="link" to="/favoritos">Favoritos</Link> 
                 <Link className="link" to="/series">Series</Link> 
                 <Link className="link" to="/peliculas">Peliculas</Link>
                <form onSubmit={(event)=>this.evitarSubmit(event)}>
                    <label>Buscador</label>
                    <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
                    <input type="submit" value="Submit" />
                </form>     
            </nav>
        )
    }
}

export default Header



