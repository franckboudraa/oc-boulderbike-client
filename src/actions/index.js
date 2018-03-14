import axios from 'axios';
import {
  FETCH_RIDERS,
  ERROR_RIDERS,
  FETCH_PHOTOS,
  ERROR_PHOTOS,
  FLUSH_PHOTOS,
  FETCH_RIDER,
  ERROR_RIDER
} from './types';

const API_URL = process.env.REACT_APP_BACKEND_URL;
const FLICKR_PUBLIC_KEY = process.env.REACT_APP_FLICKR_KEY;

export const startHerokuVM = () => async dispatch => {
  await axios.get(API_URL); // ping the Heroku backend VM for starting it
};

export const fetchRiders = () => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/riders`);
    if (res.status === 200) {
      dispatch({ type: FETCH_RIDERS, riders: res.data });
    }
  } catch ({ response }) {
    dispatch({ type: ERROR_RIDERS });
  }
};

export const fetchPhotos = page => async dispatch => {
  const FLICKR_API_URL = 'https://api.flickr.com/services/rest/';
  const FLICKR_PARAMS = {
    api_key: FLICKR_PUBLIC_KEY,
    method: 'flickr.photos.search',
    tags: 'bikerace,BoulderBikeTour',
    media: 'photo',
    per_page: 30,
    format: 'json',
    nojsoncallback: 1,
    extras: 'date_upload, icon_server, owner_name, views',
    page
  };
  page === 1 && dispatch({ type: FLUSH_PHOTOS }); // if we want the first page, reset the state first (issue without this fix)
  try {
    const res = await axios.get(`${FLICKR_API_URL}`, { params: FLICKR_PARAMS });
    dispatch({
      type: FETCH_PHOTOS,
      photos: res.data.photos.photo,
      page: res.data.photos.page
    });
  } catch ({ response }) {
    dispatch({ type: ERROR_PHOTOS });
  }
};

export const fetchRider = id => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/riders/${id}`);
    dispatch({
      type: FETCH_RIDER,
      rider: res.data[0]
    });
  } catch ({ response }) {
    dispatch({ type: ERROR_RIDER });
  }
};
