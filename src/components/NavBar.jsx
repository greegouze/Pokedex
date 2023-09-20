import PropTypes from "prop-types";

const NavBar = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};
NavBar.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavBar;
