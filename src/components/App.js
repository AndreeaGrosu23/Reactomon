import React, { Component } from 'react';
import Navbar from './navbar';
import PageContent from './page-content';
import PokemonList from './pokemons';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <PageContent />
        <PokemonList />
      </div>
    );
  } 

}
