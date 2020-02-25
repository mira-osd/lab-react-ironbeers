import React, {Component} from 'react'
import axios from 'axios';
import ListBeers from './ListBeers';
import Navbar from './Navbar';

// bien relire le cours du prof avant de commencer 

class NewBeer extends Component {
    state = { name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by:"" }
   
    handleFormSubmit = (event) => {
      event.preventDefault();
      
      //
      // AJAX request below
      //
      
      const name = this.state.name;
      const description = this.state.description;
      const tagline = this.state.tagline;
      const first_brewed = this.state.first_brewed;
      const brewers_tips = this.state.brewers_tips;
      const attenuation_level = this.state.attenuation_level; 
      const contributed_by = this.state.contributed_by; 

      axios.post("https://ih-beer-api.herokuapp.com/beers/new", { name, description, tagline, first_brewed, brewers_tips,attenuation_level,contributed_by })
        .then(() => {
            
            // Reset form
            this.setState({name: "", tagline: "", description: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by:""});
        })
        .catch(error => console.log(error))
    }
  
    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return( 
            <div>
                <Navbar />
            <form onSubmit={this.handleFormSubmit}>
              <label>Name :</label>
              <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
              <label>Tagline :</label>
              <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
              <label>Description :</label>
              <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
              <label>First Brewed :</label>
              <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
              <label>Brewers Tips :</label>
              <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
              <label>Attenuation Level :</label>
              <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
              
              <input type="submit" value="ADD NEW" />
            </form>
          </div>
        )
    }
}

export default NewBeer