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