import PropTypes from "prop-types";
import { useEffect } from "react";
const NavBar = ({ pokemonList, currentPokemon, onClick }) => {
  useEffect(() => {
    if (currentPokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  }, [currentPokemon]);
  return (
    <div className="navbar">
      {pokemonList.map((pokemon, index) => (
        <button
          key={index}
          onClick={() => onClick(pokemon)}
          className={pokemon.name === currentPokemon.name ? "active" : null}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  currentPokemon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBar;
