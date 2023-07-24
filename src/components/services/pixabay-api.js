import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '38328669-8f2ae6162a26d5e5d3ed969be';

export const fetchImages = async (searchQuery, page, perPage) => {
  const { data } = await axios.get(
    `${URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=${
      perPage || 12
    }&image-type=photo&orientation=horizontal&safesearch=true`
  );
  return data;
};
