import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import ListBeers from './components/ListBeers'

class App extends Component {
  render() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />
      </Switch>
      
    </div>
  );
  }
}

export default App;
