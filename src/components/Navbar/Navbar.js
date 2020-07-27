import React from 'react';
import { NavLink } from "react-router-dom";
import './style.css';

function Navbar() {
    return (
        <div className="Navbar">
            <div className="submenu">
                <NavLink exact to="/pokemons">
                    PokeList
                </NavLink>
            </div>
            <div className="submenu">
                <NavLink exact to="/types">
                    PokeTypes
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;