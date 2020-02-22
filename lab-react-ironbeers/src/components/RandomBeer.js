import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
  state = {
    random: {}
  }

  getRandomBeer = () =>{
    axios.get(`https://ih-beer-api.herokuapp.com/beers/random` )
      .then(responseFromApi => {
        this.setState({random: responseFromApi.data})
      })
      .catch(err => console.log('Error', err))
  }

  componentDidMount() {
    this.getRandomBeer();
  }

  render(){
    console.log('beer', this.state.random)
    return(
        <div>
            {Object.keys(this.state.random).length > 0 && 
                <div key={this.state.random._id}>
                    <img className="img-beer" src={this.state.random.image_url} alt=""></img>
                    <h3>{this.state.random.name}</h3>
                    <p>{this.state.random.tagline}</p>
                    <p>{this.state.random.first_brewed}</p>
                    <p>{this.state.random.attenuation_level}</p>
                    <p>{this.state.random.description}</p>
                    <p>{this.state.random.contributed_by}</p>
                </div>
            }
        </div>
    )
  }
}

export default RandomBeer;
