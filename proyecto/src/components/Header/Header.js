import React, {Component} from 'react';
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
                <ul>
                    <li> <Link className="navbar" to="/home" exact="true">Home</Link> </li> 
                    <li> <Link className="navbar" to="/favoritos">Favoritos</Link> </li> 
                    <li> <Link className="navbar" to="/peliculas">Peliculas</Link> </li> 
                    <li> <Link className="navbar" to="/series">Series</Link> </li> 
                </ul>
            </nav>
        )
    }
}

export default Header