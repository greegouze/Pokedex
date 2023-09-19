import PropTypes from "prop-types";
import styles from "./PokemonCard.module.css";

PokemonCard.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string.isRequired,
};

function PokemonCard({ imgSrc, name }) {
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
