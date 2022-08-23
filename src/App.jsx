import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import fetchImages from './services/api';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';
import Modal from './components/Modal/Modal';

const App = () => {
  const [searchWord, setSearchWord] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState('');

  useEffect(() => {
    if (!searchWord) {
      return;
    }

    setLoading(true);

    fetchImages({ searchWord, page })
      .then(res => {
        setImages(prevState => [...prevState, ...res.hits]);
        setTotalHits(res.totalHits);
      })
      .catch(res => {
        console.log(res);
      })
      .finally(() => setLoading(false));
  }, [searchWord, page]);

  const handleFormSubmit = searchWord => {
    setImages([]);
    setSearchWord(searchWord);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showButton = () => {
    if (loading) {
      return false;
    }
    if (images.length === totalHits) {
      return false;
    }
    if (totalHits > images.length) {
      return true;
    }
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />

      {loading && <Loader />}

      <ImageGallery images={images} onOpenModal={openModal} />

      {showButton() && <Button onMoreClick={handleLoadMore} />}

      {showModal && (
        <Modal largeImageURL={largeImageURL} onCloseModal={closeModal} />
      )}
    </>
  );
};

export default App;
