import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export default function PokemonInfo() {
  let { pokemonName } = useParams();
  const [onePokemonInfo, setOnePokemonInfo] = useState({
    moves: [],
    type: []
  });
  useEffect(() => {
    const getOnePokemonInfo = async () => {

      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setOnePokemonInfo({
        img: data.sprites.other["official-artwork"].front_default,
        name: data.name,
        type: data.types.map((type) => type.type.name),
        moves: data.moves.map((move) => move.move.name),
      });
    }
    getOnePokemonInfo();
  }, [pokemonName]);

  return (
    <div className="col s12 m12">
      <div className="card horizontal hide-on-med-and-down center">
        <div className="card-image" id={styles.cardImage}>
          <img src={onePokemonInfo.img} alt={onePokemonInfo.name} />
          <h2>{pokemonName}</h2>
          <div className="card-action">
            <Link to='/'>Voltar</Link>
          </div>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h3>Golpes</h3>
            <ul className={styles.cardList}>
              {onePokemonInfo.moves.map((onePokemonMove, index) => {
                return (
                  <li key={index}>{onePokemonMove}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="col s12 m12">
        <div className="card hide-on-large-only center">
          <div className="card-image">
            <h2>{pokemonName}</h2>
            <img src={onePokemonInfo.img} alt={onePokemonInfo.name} />
            <Link to='/'>Voltar</Link>
          </div>
          <div className="card-content">
            <h3>Golpes</h3>
            <ul className={styles.cardListMobile}>
              {onePokemonInfo.moves.map((onePokemonMove, index) => {
                return (
                  <li key={index}>{onePokemonMove}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
