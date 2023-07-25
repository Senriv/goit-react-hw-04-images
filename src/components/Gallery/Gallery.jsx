import { useState, useEffect } from 'react';
import { fetchImages } from 'components/services/pixabay-api';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Gallery() {
  const [searchName, setSearchName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    async function addImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(searchName, currentPage);

        if (data.hits.length === 0) {
          return toast.info('Sorry image not found...', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        const normalizImages = normalizedImages(data.hits);

        setImages(prevImages => [...prevImages, ...normalizImages]);
        setIsLoading(false);
        setTotalPages(Math.ceil(data.totalHits / 12));
      } catch {
        toast.error('Something went wrong!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
        setIsLoading(false);
      }
    }
    addImages();
  }, [searchName, currentPage]);

  const onFormSubmit = query => {
    setSearchName(query);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const normalizedImages = imagesArray =>
    imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
      return { id, tags, webformatURL, largeImageURL };
    });

  return (
    <div>
      <SearchBar onSubmit={onFormSubmit} />
      <ToastContainer transition={Slide} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
    </div>
  );
}

export default Gallery;
