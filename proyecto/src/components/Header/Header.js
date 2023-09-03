import React, {Component} from 'react';

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
                   Links
                </ul>
            </nav>

        )
    }
}

export default Header