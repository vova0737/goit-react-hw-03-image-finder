import axios from 'axios';

const KEY = '20353486-11ecb503bec0da706377a3524';

const get = (query, page = 1) => {
  const response = axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=10`,
  );
  return response;
};

export default get;

