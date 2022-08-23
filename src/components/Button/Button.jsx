import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ onMoreClick }) {
  return (
    <button className={styles.button} onClick={onMoreClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onMoreClick: PropTypes.func,
};

export default Button;
