import axios from 'axios';

const KEY = '20353486-11ecb503bec0da706377a3524';
const BASE_URL = 'https://pixabay.com/api/';

const getImagesData = (query, page = 1) => {
  const response = axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=10`,
  );
  return response;
};

export default getImagesData;

