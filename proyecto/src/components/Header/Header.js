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
            <ul >
                <li> <Link className="link" to="/home" exact="estrenos">Home</Link></li> 
                <li> <Link className="link" to="/favoritos">Favoritos</Link></li> 
                <li> <Link className="link" to="/series">Series</Link></li> 
                <li> <Link className="link" to="/peliculas">Peliculas</Link></li> 
            </ul>
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



