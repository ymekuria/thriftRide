import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection, Card, Header } from './common';
import { Actions } from 'react-native-router-flux';
import RNGooglePlaces from 'react-native-google-places';

class DestinationPicker extends Component {
  componentWillMount() {
console.log('running AutoComplete')
    RNGooglePlaces.openAutocompleteModal()
    .then((place) => { 
        console.log(place);     
        // place represents user's selection from the 
        // suggestions and it is a simplified Google Place object.
        Actions.AddressAutoComplete(); 
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object 
   // Actions.AddressAutoComplete();     
  }
  renderAddressAutoComplete() {    
   //  console.log('running AutoComplete')
   //  RNGooglePlaces.openPlacePickerModal()
   //  .then((place) => { 
   //      console.log(place);     
   //      // place represents user's selection from the 
   //      // suggestions and it is a simplified Google Place object. 
   //  })
   //  .catch(error => console.log(error.message));  // error is a Javascript Error object 
   // // Actions.AddressAutoComplete(); 
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default DestinationPicker;
