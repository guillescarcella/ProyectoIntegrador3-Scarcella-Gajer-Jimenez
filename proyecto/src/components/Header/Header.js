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
                    <li>elemento menu</li>
                    <li>elemento menu</li>
                    <li>elemento menu</li>
                    <li>elemento menu</li>  
                </ul>
            </nav>

        )
    }
}

export default Header