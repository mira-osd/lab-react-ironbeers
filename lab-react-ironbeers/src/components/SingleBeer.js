import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

class SingleBeer extends Component {
  state = {
    beer: {}
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () =>{
    const beerId = this.props.match.params.id
    axios.get(`https://ih-beer-api.herokuapp.com/beers/${beerId}` )
      .then(responseFromApi => {
        this.setState({beer: responseFromApi.data})
      })
      .catch(err => console.log('Error', err))
  }

  render(){
    console.log('beer', this.state.beer)
    return(
        <div>
          <Navbar />
            {Object.keys(this.state.beer).length > 0 && 
                <div key={this.state.beer._id}>
                    <img className="img-beer" src={this.state.beer.image_url} alt=""></img>
                    <h3>{this.state.beer.name}</h3>
                    <p>{this.state.beer.tagline}</p>
                    <p>{this.state.beer.first_brewed}</p>
                    <p>{this.state.beer.attenuation_level}</p>
                    <p>{this.state.beer.description}</p>
                    <p>{this.state.beer.contributed_by}</p>
                </div>
            }
        </div>
    )
  }
}

export default SingleBeer;

// SYNTAXE
// {isThisIsTrue && thenDoThis}
// {ifThisIsFalse || ThenDoThis}
// {boolean ? doThisIfTrue : elseDoThisIfFalse}

// J'arrive sur ma liste de toutes les bières, avec le call /beers/ dans ListBeer
// Je clique sur une des bières, le link met l'ID de la bière dans l'URL
// J'arrive sur la page SingleBeer, mon composant retrouve l'ID dans l'URL, et le passe à la requête axios /beers/:id
// Ma requête axios update le state de SingleBeer
// SingleBeer lit les infos de la bière dans le state et les affiche
