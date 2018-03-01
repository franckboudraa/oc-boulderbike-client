import { combineReducers } from 'redux';

import ridersReducer from './ridersReducer';

export default combineReducers({
  riders: ridersReducer
});
