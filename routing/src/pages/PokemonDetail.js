import React, { useState, useEffect } from 'react';

function PokemonDetail( { match } ) {

    useEffect( () => {
        fetchPokemonData()
    });

    const [pokemonData, setPokemonData] = useState([])

    const fetchPokemonData = async () => {
        const data = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${match.params.id}`
        );

        const pokemon = await data.json();

        setPokemonData(pokemon)
    }

    return (
        <div>
            <h1>{pokemonData.name}</h1>
            <img
                alt={pokemonData.name}
                src={`https://pokeres.bastionbot.org/images/pokemon/${match.params.id}.png`}
                width="500"
            />
            
        </div>
    );
}

export default PokemonDetail;
