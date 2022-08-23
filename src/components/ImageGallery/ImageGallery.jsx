import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className={styles.gallery}>
      {images.map(({ tags, webformatURL, id, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            onClickModal={() => onOpenModal(largeImageURL)}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  openModal: PropTypes.func,
};

export default ImageGallery;
