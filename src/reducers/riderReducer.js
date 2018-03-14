import { FETCH_RIDER, ERROR_RIDER } from '../actions/types';

export default function riderReducer(
  state = { loading: true, error: false, rider: {} },
  action
) {
  switch (action.type) {
    case FETCH_RIDER:
      return { ...state, loading: false, rider: action.rider };
    case ERROR_RIDER:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
