import PropTypes from "prop-types";
import styles from "./PokemonCard.module.css";

function PokemonCard({ imgSrc, name }) {
  PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  };

  return (
    <div className={styles.container}>
      <figure className={styles.card}>
        {imgSrc ? (
          <img src={imgSrc} alt={name} className={styles.cardImg} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
