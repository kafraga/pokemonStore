import React from 'react';
import OnePokemon from '../PokemonCard/index';

export default function Pokemon({ pokemon, addCart, themeColor }) {
  return (
    <div className="row">
      {pokemon.map((onePokemon) => {
        return (
          <OnePokemon onePokemon={onePokemon} key={onePokemon.name} addCart={addCart} themeColor={themeColor}>
          </OnePokemon>
        )
      })}

    </div>
  )
}
