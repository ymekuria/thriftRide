import axios from 'axios';
import { googleMapsUrl, googleMapsKey } from '../config';
import { 
  CURRENT_LOCATION_UPDATE,
  PICKUP_LOCATION_UPDATE, 
  DESTINATION_UPDATE 
} from './types';


const setDefaultCurrentLocation = (latitude, longitude, dispatch) => {
  const url = `${googleMapsUrl}latlng=${latitude},${longitude}&key=${googleMapsKey}`;
    //converts device current lat and long location to a formatted address 
  axios.get(url)
    .then(response => {
      const currentLocationObj = {
        latitude,
        longitude,
        address: response.data.results[0].formatted_address 
      };

      dispatch({ 
        type: CURRENT_LOCATION_UPDATE, 
        payload: currentLocationObj
      });
    })
    .catch(error => console.log(error));
};

// getting the device coordinates using the navigator api
export const getDefaultCurrentLocation = () => {
  return (dispatch) => {
    const options = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };
    const positionError = (error) => alert(JSON.stringify(error));

    const positionSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      // adds the lattitude and longitude to the application state
      setDefaultCurrentLocation(latitude, longitude, dispatch);        
    };

    navigator.geolocation.getCurrentPosition(positionSuccess, positionError, options);
  };
};

export const updateDestination = (text) => {
  return { type: DESTINATION_UPDATE, payload: text };
};

export const fetchRideData = () => {
  console.log('fetching ride data');
}