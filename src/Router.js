import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import TripAddressForm from './components/TripAddressForm';
import AddressAutoComplete from './components/AddressAutoComplete';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene  initial key="AddressAutoComplete" component={AddressAutoComplete} title="Test" /> 
      <Scene  key="TripAddressForm" component={TripAddressForm} title="Where Are You Going" /> 
    </Router>
  );
}

export default RouterComponent;