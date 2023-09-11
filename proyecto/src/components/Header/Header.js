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
            <img className= "imagen" src="./img/logopop.png" alt="logo"></img>
                 <Link className="link" to="/" exact="estrenos">HOME</Link> 
                 <Link className="link" to="/favoritos">FAVORITOS</Link> 
                 <Link className="link" to="/series">SERIES</Link> 
                 <Link className="link" to="/peliculas">PELICULAS</Link> 
            </nav>
        )
    }
}

export default Header



