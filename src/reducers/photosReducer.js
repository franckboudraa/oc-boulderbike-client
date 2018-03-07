import { FETCH_PHOTOS, ERROR_PHOTOS } from '../actions/types';

export default function photosReducer(
  state = { loading: true, error: false, photos: [] },
  action
) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return { ...state, loading: false, photos: action.payload };
    case ERROR_PHOTOS:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
