import styles from './PokemonCard.module.css'

function PokemonCard() {
  return (
    <figure className={styles.card}>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbi"
        className={styles.cardImg}
      />
      <figcaption>bulbasaur</figcaption>
    </figure>
  );
}

export default PokemonCard;