import axios from 'axios';

const KEY = '20353486-11ecb503bec0da706377a3524';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
}

const getImagesData = async ({ query, page }) => {
  try {
    const data = await axios.get('', { params: { query, page }, });
    return data;
  }
  catch (error) {
    console.log('Error', { error });
    return [];
  }
};

export default getImagesData;