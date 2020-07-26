import React from 'react';
import { NavLink} from 'react-router-dom';

export default function () {
    return (
        <div className="Navbar" style= {{
            padding: 20,
            background: "#FF4236",
            color: "white"
        }}> 
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
