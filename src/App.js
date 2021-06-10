import axios from 'axios';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart/Cart';
import CartMobile from './Components/Cart/CartMobile';
import Header from './Components/Header';
import Pokemon from './Components/PokemonList/Pokemon';
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [cart, setCart] = useState([]);
  const [color, setColor] = useState('blue');
  const [type, setType] = useState('11');
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const getPokemon = async () => {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${type}/`);
      const pokemonResults = data.pokemon;

      const pokemonFinale = pokemonResults.map((pokemonResult) => {
        return {
          name: pokemonResult.pokemon.name,
          url: pokemonResult.pokemon.url
        }
      });

      const pokemonPromise = pokemonFinale.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        const pokemonImg = data.sprites.other["official-artwork"].front_default;
        const price = (Math.random() * 101 + 10)
        return {
          name: pokemon.name,
          img: pokemonImg,
          price: `R$ ${(price).toFixed(2)}`,
          priceNumber: price
        }
      })
      const pokemonList = await Promise.all(pokemonPromise);

      setPokemon(pokemonList);
      window.addEventListener("resize", () => setWidth(window.innerWidth));
    }
    getPokemon();

  }, [type]);

  useEffect(() => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  })

  function handleCart(onePokemon) {
    const newPokemon = Object.assign([], cart);
    newPokemon.push(onePokemon);
    setCart(newPokemon);
  }

  function handleTheme(newColor) {
    setColor(newColor);
  }

  function handleType(newType) {
    setType(newType);
    console.log(newType)
  }

  return (
    <div className="row">
      <main>
        <Header setColor={handleTheme} setType={handleType} themeColor={color}></Header>
        {width <= breakpoint &&
          <div className="col s12 m12 l4">
            <CartMobile cart={cart} themeColor={color}></CartMobile>
          </div>
        }
        <div className="col s12 m12 l8">
          <Pokemon pokemon={pokemon} addCart={handleCart} themeColor={color}>
          </Pokemon>
        </div>
        {width > breakpoint &&
          <div className="col s12 m12 l4">
            <Cart cart={cart} themeColor={color}></Cart>
          </div>
        }
      </main>
    </div>
  );
}

export default App;
