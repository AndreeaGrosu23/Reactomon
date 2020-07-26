import React, { Component} from 'react';
import axios from 'axios'
import PokemonDetail from './pokemon_detail';
import { Switch, Route, Link } from 'react-router-dom';

export default class PokemonList extends Component {
    state = {
        pokemons: []
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon`)
            .then(res => {
                const pokemons = res.data.results;
                this.setState({ pokemons });
            })
    }

    render() {
        return (
            <div style={{
                background: "white",
                borderRadius: 10,
            }}>              
                <Link to="/pokemon/1">
                    { this.state.pokemons.map(pokemon => <p> {pokemon.name} </p>) }  
                </Link>                             
            </div>
        );
    }
}