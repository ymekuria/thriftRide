import { 
  CURRENT_LOCATION_UPDATE, 
  DESTINATION_UPDATE 
} from './types';

export const updateCurrentLocation = (text) => {
  console.log(text);
  return { type: CURRENT_LOCATION_UPDATE, payload: text };
};

export const updateDestination = (text) => {
  return { type: DESTINATION_UPDATE, payload: text };
};
