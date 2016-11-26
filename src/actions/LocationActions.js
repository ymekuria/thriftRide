import axios from 'axios';
import googleMapsKey from '../config';
import { 
  CURRENT_LOCATION_UPDATE,
  PICKUP_LOCATION_UPDATE, 
  DESTINATION_UPDATE 
} from './types';


export const setDefaultCurrentLocation = () => {
  return (dispatch) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=37.785834,-122.406417&key=${googleMapsKey}`;
    
    // converts device current lat and long location to a formatted address 
    axios.get(url)
      .then((response) => {
        const currentLocationObj = {
          lat: '',
          lng: '',
          address: response.data.results[0].formatted_address 
        };

        dispatch({ 
          type: CURRENT_LOCATION_UPDATE, 
          payload: currentLocationObj
        });
      });
    };  
};

export const updateCurrentLocation = (text) => {
  console.log(text);
  return { type: PICKUP_LOCATION_UPDATE, payload: text };
};

export const updateDestination = (text) => {
  return { type: DESTINATION_UPDATE, payload: text };
};

export const fetchRideData = () => {
  console.log('fetching ride data');
}