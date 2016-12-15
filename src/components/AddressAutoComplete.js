import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from './common';
import RNGooglePlaces from 'react-native-google-places';

class AddressAutoTestComplete extends Component {
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => { 
        console.log(place);     
        // place represents user's selection from the 
        // suggestions and it is a simplified Google Place object. 
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object 
  }
 
  render() {
    return (
      <View>
        <Button
          onPress={this.openSearchModal.bind(this)}
        >
          Auto
        </Button>
      </View>  
    );
  }
}

export default AddressAutoTestComplete;