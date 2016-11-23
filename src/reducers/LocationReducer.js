import { 
  CURRENT_LOCATION_UPDATE, 
  DESTINATION_UPDATE 
} from '../actions/types';

const INITIAL_STATE = {
  currentLocation: '',
  destination: ''
};

const LocationReducer = (state = INITIAL_STATE, action) => {
  console.log('action ', action);
  switch (action.type) {
    case CURRENT_LOCATION_UPDATE:
      return { ...state, currentLocation: action.payload };
    case DESTINATION_UPDATE:
      return { ...state, destination: action.payload };
    default:
      return state;  
  }
};

export default LocationReducer;
