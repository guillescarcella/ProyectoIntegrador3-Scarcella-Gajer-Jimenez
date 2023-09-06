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
                <a className='link' href="/home">Home</a>
                <a className='link' href="/peliculas">Peliculas </a>
                <a className='link' href="/series"> Series</a>
                <a className='link' href="/favoritos">Favoritos</a>
                  
            </nav>
        )
    }
}

export default Header