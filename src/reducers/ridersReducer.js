import { FETCH_RIDERS, ERROR_RIDERS } from '../actions/types';

export default function ridersReducer(
  state = { loading: true, error: false, riders: [] },
  action
) {
  switch (action.type) {
    case FETCH_RIDERS:
      return { ...state, loading: false, riders: action.riders };
    case ERROR_RIDERS:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}
