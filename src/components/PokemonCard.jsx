import PropTypes from "prop-types";
import styles from "./PokemonCard.module.css";

function PokemonCard(props) {
  const { pokemon } = props;

  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <figure className={styles.card}>
      {pokemon.imgSrc ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className={styles.cardImg}
        />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
