import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PokemonList from './pokemons';
import TypeList from './types';

export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/pokemons" component={PokemonList} />
                <Route exact path="/types" component={TypeList} />
            </Switch>
        </div>
    )
}