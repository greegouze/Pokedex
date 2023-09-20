import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (action) => {
    if (action === "précèdent") {
      setPokemonIndex(pokemonIndex - 1);
    } else if (action === "suivant") {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const pokemon = pokemonList[pokemonIndex];
  return (
    <div>
      <MyTitle name="Pokédex" />
      <PokemonCard {...pokemon} />
      {pokemonIndex > 0 ? (
        <NavBar name="Précèdent" onClick={() => handleClick("précèdent")} />
      ) : null}

      {pokemonIndex < pokemonList.length - 1 ? (
        <NavBar name="Suivant" onClick={() => handleClick("suivant")} />
      ) : null}
    </div>
  );
}

export default App;
