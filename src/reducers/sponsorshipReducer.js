import {
  PENDING_SPONSORSHIP,
  SUCCESS_SPONSORSHIP,
  ERROR_SPONSORSHIP
} from '../actions/types';

export default function sponsorshipReducer(
  state = { loading: false, error: false, success: false },
  action
) {
  switch (action.type) {
    case PENDING_SPONSORSHIP:
      return {
        ...state,
        loading: true
      };
    case SUCCESS_SPONSORSHIP:
      return { ...state, loading: false, error: false, success: true };
    case ERROR_SPONSORSHIP:
      return { ...state, loading: false, error: true, success: false };
    default:
      return state;
  }
}
