
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  render(){
    return(
      <div>
        <div className="listbeers">
            <img src='/img/beers.png' alt=""></img>
            <Link to="/beers"><h1>All Beers</h1></Link>
        </div>

        <div className="randombeer">
            <img src='/img/random-beer.png' alt=""></img>
            <Link to="/random-beer"><h1>Random Beer</h1></Link>
        </div>

        <div className="newbeer">
            <img src='/img/new-beer.png' alt=""></img>
            <Link to="/new-beer"><h1>New Beer</h1></Link>
        </div>
       

      </div>
    )
  }
}

export default Home;