import PropTypes from "prop-types";
import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ image, alt, onClickModal }) {
  return (
    <li className={styles.galleryItem} onClick={onClickModal}>
      <img src={image} alt={alt} className={styles.image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  onModalClick: PropTypes.func,
};

export default ImageGalleryItem;
