import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  const pokemon = pokemonList[0];
  return (
    <div>
      <MyTitle/>
      <PokemonCard {...pokemon} />
    </div>
  );
}

export default App;
