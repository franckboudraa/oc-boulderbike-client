import axios from 'axios';
import { FETCH_RIDERS, ERROR_RIDERS } from './types';

const API_URL = 'https://boulderbike.herokuapp.com';

export const fetchRiders = () => async dispatch => {
  try {
    const res = await axios.get(`${API_URL}/riders`);
    console.log(res);
    if (res.status === 200) {
      dispatch({ type: FETCH_RIDERS, payload: res.data });
    }
  } catch ({ response }) {
    dispatch({ type: ERROR_RIDERS, payload: '' });
  }
};
