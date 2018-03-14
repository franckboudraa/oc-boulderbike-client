import { combineReducers } from 'redux';

import ridersReducer from './ridersReducer';
import photosReducer from './photosReducer';
import riderReducer from './riderReducer';

export default combineReducers({
  riders: ridersReducer,
  photos: photosReducer,
  rider: riderReducer
});
