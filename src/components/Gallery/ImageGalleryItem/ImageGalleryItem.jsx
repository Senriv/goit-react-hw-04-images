import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import { GalleryLi, GalleryImg } from './ImageGalleryItem.styled';

function ImageItem({ image }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  return (
    <GalleryLi>
      <GalleryImg
        src={image.webformatURL}
        alt={image.tags}
        onClick={toggleModal}
      />
      {showModal && (
        <Modal
          largeImageURL={image.largeImageURL}
          tags={image.tags}
          onClose={toggleModal}
        />
      )}
    </GalleryLi>
  );
}

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;
