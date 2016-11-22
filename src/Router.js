import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import TripAddressForm from './components/TripAddressForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene  initial key="TripAddressForm" component={TripAddressForm} title="Where Are You Going" /> 
    </Router>
  );
}

export default RouterComponent;