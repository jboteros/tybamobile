import {GET_PLACES, GET_LOCATIONS} from './Types';
import apisauce from 'apisauce';

export const getLocations = (lat, long) => dispatch => {
  const api = apisauce.create({
    baseURL: `https://developers.zomato.com/api/v2.1/geocode??lat=${lat}&lon=${long}`,
    headers: {
      Accept: 'application/json',
      'user-key': '53901f7560f04951ebf26911dbc43727',
    },
    timeout: 20000,
  });

  return api.get().then(result => {
    console.log(result);
    const locations = result.data.nearby_restaurants.map(item => {
      return new Promise(resolve => {
        resolve({
          ...item,
        });
      });
    });

    Promise.all(locations).then(response => {
      console.log('response', response);
      return dispatch({type: GET_LOCATIONS, payload: response});
    });
  });
};

export const getPlaces = query => dispatch => {
  const api = apisauce.create({
    baseURL: `https://developers.zomato.com/api/v2.1/locations?&count=5&query=${query}`,
    headers: {
      Accept: 'application/json',
      'user-key': '53901f7560f04951ebf26911dbc43727',
    },
    timeout: 20000,
  });

  return api.get().then(result => {
    console.log(result);
    const places = result.data.location_suggestions.map(item => {
      return new Promise(resolve => {
        resolve({
          ...item,
        });
      });
    });

    Promise.all(places).then(response => {
      console.log('response', response);
      return dispatch({type: GET_PLACES, payload: response});
    });
  });
};
