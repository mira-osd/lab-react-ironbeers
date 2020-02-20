
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {

  render(){
    return(
      <div>
        <div className="listbeers">
            <img src='/img/beers.png' alt=""></img>
            <Link to="/beers/"><h1>All Beers</h1></Link>
        </div>
        {/* <RandomBeer />
        <NewBeer /> */}

      </div>
    )
  }
}

export default Home;