import React from 'react';

import Nav from './components/Nav'

import Home from './pages/Home';
import About from './pages/About';
import Pokemon from './pages/Pokemon';
import PokemonDetail from './pages/PokemonDetail';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          
          <Route path="/pokemon" exact component={Pokemon} />
          <Route path="/pokemom/:id" component={PokemonDetail} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
