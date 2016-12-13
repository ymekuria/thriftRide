import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import TripAddressForm from './components/TripAddressForm';
import TestComplete from './components/TestComplete';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene  initial key="TestComplete" component={TestComplete} title="Test" /> 
      <Scene  key="TripAddressForm" component={TripAddressForm} title="Where Are You Going" /> 
    </Router>
  );
}

export default RouterComponent;