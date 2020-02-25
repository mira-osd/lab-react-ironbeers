import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
            <Link to ="/">
            <img className="nav-img" src='/img/home.png' alt=""></img>
            </Link>
            </div>
        )
    }
}

export default Navbar