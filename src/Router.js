import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import TripAddressForm from './components/TripAddressForm';
import TripMap from './components/TripMap';
import AddressAutoComplete from './components/AddressAutoComplete';

// <Scene  key="DestinationPicker" component={DestinationPicker} title="Where Are You Going" /> 
const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene  initial key="AddressAutoComplete" component={AddressAutoComplete} title="AutoTest" /> 
      <Scene  key="TripMap" component={TripMap} title="Map" /> 
    </Router>
  );
}

export default RouterComponent;