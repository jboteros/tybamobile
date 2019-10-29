import * as geolib from 'geolib';
import Geolocation from '@react-native-community/geolocation';

const config = {
  //   skipPermissionRequests: false,
  //   authorizationLevel: 'auto'
};

Geolocation.setRNConfiguration(config);
// Geolocation.getCurrentPosition((info) => console.log(info));

export const getCurrentLocation = async () => {
  Geolocation.getCurrentPosition(
    position => {
      const initialPosition = JSON.stringify(position);

      return initialPosition;
      //   this.setState({ initialPosition });
    },
    error => console.log(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
  //   return Geolocation.getCurrentPosition((info) => {
  //     console.log(info);

  // currentLocation = {
  //   latitude: info.latitude,
  //   latitude: info.longitude
  // };
  // return info; //currentLocation;
  //   });
};

export const getDistance = (client, expert) => {
  const distance = geolib.getDistance(client, expert);
  console.log('geoHelper:getDistance', distance);
  return distance;
};
