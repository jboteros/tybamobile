import {combineReducers} from 'redux';

import UI from './UI/Reducer';
import Places from './Places/Reducer';

export default () =>
  combineReducers({
    ui: UI,
    places: Places,
  });
