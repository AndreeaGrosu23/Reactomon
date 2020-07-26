import React from 'react';
import { NavLink} from 'react-router-dom';
import PokemonList from './pokemons';
import TypeList from './types';

export default function () {
    return (
        <div>
            <div>
                <NavLink to="/pokemons">
                    PokemonList
                </NavLink>
            </div>
            <div>
                <NavLink to="/types">
                    TypeList
                </NavLink>
            </div>
        </div>
    )
}
