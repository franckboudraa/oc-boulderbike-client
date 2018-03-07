import { combineReducers } from 'redux';

import ridersReducer from './ridersReducer';
import photosReducer from './photosReducer';

export default combineReducers({
  riders: ridersReducer,
  photos: photosReducer
});
