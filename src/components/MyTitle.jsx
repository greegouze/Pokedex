import PropTypes from "prop-types";
import style from "./MyTitle.module.css";

const MyTitle = (props) => {
  return <h1 className={style.title}>{props.name}</h1>;
};
MyTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyTitle;
