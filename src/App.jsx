import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        background: 'green'
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        background: 'red'
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        background: 'blue'
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        background: 'yellow'
    },
    {
      name: "mew",
      background: 'black'
    },
  ];

  const [currentPokemon, setCurrentPokemon] = useState(pokemonList[0]);

  return (
    <div>
      <MyTitle name="Pokédex" />
      <PokemonCard {...currentPokemon} />
      <NavBar
        pokemonList={pokemonList}
        currentPokemon={currentPokemon}
        onClick={setCurrentPokemon}
      />
    </div>
  );
}

export default App;
