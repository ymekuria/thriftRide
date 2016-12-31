import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import TripAddressForm from './components/TripAddressForm';
import AddressAutoComplete from './components/AddressAutoComplete';
import DestinationPicker from  './components/DestinationPicker';
import AppleMap from './components/AppleMap';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      
      <Scene  initial key="AppleMap" component={AppleMap} title="Map" /> 
      <Scene  key="DestinationPicker" component={DestinationPicker} title="Where Are You Going" /> 

      <Scene  key="AddressAutoComplete" component={AddressAutoComplete} title="Test" /> 
    </Router>
  );
}

export default RouterComponent;