import { useState } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleWordChange = event => {
    setSearchWord(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchWord.trim() === '') {
      return Notify.warning('Please enter any word');
    }

    onSubmit(searchWord);
    setSearchWord('');
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <button type="submit" className={styles.button}>
          <span className={styles.buttonLabel}>Search</span>
        </button>

        <input
          onChange={handleWordChange}
          name="word"
          value={searchWord}
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
