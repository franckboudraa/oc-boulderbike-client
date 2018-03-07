import { FETCH_PHOTOS, ERROR_PHOTOS } from '../actions/types';

export default function photosReducer(
  state = { loading: true, error: false, page: 0, photos: [] },
  action
) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        loading: false,
        page: action.page,
        photos: state.photos.concat(action.photos)
      };
    case ERROR_PHOTOS:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
