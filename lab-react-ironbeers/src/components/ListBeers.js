import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListBeers extends Component {
  state = { listOfBeers: [] }

  getAllFeatures = () =>{
    axios.get(`https://ih-beer-api.herokuapp.com/beers` )
      .then(responseFromApi => {
        this.setState({listOfBeers: responseFromApi.data})
      })
      .catch(err => console.log('Error', err))
  }

  componentDidMount() {
    this.getAllFeatures();
  }

  render(){
    return(
      <div>
          { this.state.listOfBeers.map( beer => {
            return (
              <div key={beer._id}>
                <img src={beer.image_url} alt=""></img>
                <Link to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            )})
          }
      </div>
    )
  }
}

export default ListBeers;