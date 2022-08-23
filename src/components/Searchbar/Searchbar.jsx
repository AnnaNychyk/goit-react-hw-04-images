import { Component } from "react";
import PropTypes from "prop-types";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    searchWord: "",
  };

  handleWordChange = (event) => {
    this.setState({ searchWord: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.searchWord.trim() === "") {
      return Notify.warning("Please enter any word");
    }

    this.props.onSubmit(this.state.searchWord);
    this.setState({ searchWord: "" });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleWordChange}
            name="word"
            value={this.state.searchWord}
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
