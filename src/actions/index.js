import axios from 'axios';
import {
  FETCH_RIDERS,
  ERROR_RIDERS,
  FETCH_PHOTOS,
  ERROR_PHOTOS
} from './types';

// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=767f4a87ffca583251e855cb80fc886c&tags=bike&format=json&media=photo&per_page=40&page=1

const API_URL = 'https://boulderbike.herokuapp.com';

export const fetchRiders = () => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/riders`);
    if (res.status === 200) {
      dispatch({ type: FETCH_RIDERS, payload: res.data });
    }
  } catch ({ response }) {
    dispatch({ type: ERROR_RIDERS, payload: '' });
  }
};

export const fetchPhotos = () => async dispatch => {
  const FLICKR_PUBLIC_KEY = '767f4a87ffca583251e855cb80fc886c';
  const PHOTOS_BASE_URL = 'https://api.flickr.com/services/rest';
  const PHOTOS_FLICKR_URL = `${PHOTOS_BASE_URL}/?api_key=${FLICKR_PUBLIC_KEY}&method=flickr.photos.search&tags=bikerace,BoulderBikeTour&media=photo&per_page=40&format=json&nojsoncallback=1`;
  try {
    const res = await axios.get(`${PHOTOS_FLICKR_URL}&page=1`);
    if (res.status === 200) {
      dispatch({ type: FETCH_PHOTOS, payload: res.data.photos.photo });
    }
  } catch ({ response }) {
    dispatch({ type: ERROR_PHOTOS, payload: '' });
  }
};
