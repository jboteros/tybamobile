import {createReducer} from '../Config';
import {GET_LOCATIONS, GET_PLACES} from './Types';

const initialState = {
  locations: [],
  places: [],
};

const getLocations = (state = initialState, {payload}) => {
  return {
    ...state,
    locations: payload,
  };
};

const getPlaces = (state = initialState, {payload}) => {
  return {
    ...state,
    places: payload,
  };
};

const descriptor = {
  [GET_LOCATIONS]: getLocations,
  [GET_PLACES]: getPlaces,
};

export default createReducer(initialState, descriptor);
