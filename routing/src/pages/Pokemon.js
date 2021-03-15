import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

function Pokemon() {

    useEffect( () => {
        fetchPokemonsData()
    }, []);

    const [pokemonsData, setPokemonsData] = useState([])

    const fetchPokemonsData = async () => {
        const data = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
        );

        const pokemons = await data.json();

        setPokemonsData(pokemons.results)
    }

    return (
        <div>
            <h1>Pokemon</h1>
            {pokemonsData.map((pokemon, index) => (
                <Link key={index + 1} to={`/pokemom/${index + 1}`}>
                    <p>{pokemon.name}</p>
                </Link>
            ))}
        </div>
    );
}

export default Pokemon;
