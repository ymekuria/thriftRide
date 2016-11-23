import { 
  UPDATE_CURRENT_LOCATION, 
  UPDATE_DESTINATION 
} from '../actions/types';

const INITIAL_STATE = {
  currentLocation: '',
  destination: ''
};

const LocationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_LOCATION:
      return { ...state, ...action.payload };
    case UPDATE_DESTINATION:
      return { ...state, ...action.payload };
    default:
      return state;  
  }
};

export default LocationReducer;
