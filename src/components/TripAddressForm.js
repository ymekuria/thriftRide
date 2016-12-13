import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { 
  getDefaultCurrentLocation,
  updateCurrentLocation, 
  updateDestination,
  setDestination, 
  fetchRideData 
} from '../actions';
import { 
  Card, 
  CardSection, 
  Input, 
  Button, 
  Spinner 
} from './common';

class TripAddressForm extends Component {
  componentDidMount() {
    // retrieving the current location of the device and storing it in the application state
    this.props.getDefaultCurrentLocation();
  }

  onCurrentLocationChange(text) {
    this.props.updateCurrentLocation(text);
  }

  onDestinationChange(text) {
    this.props.updateDestination(text);
  } 

  onButtonPress() {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=2326+Fulton+St,CA&key=AIzaSyBwQJUuR2Jj31WbxuTegm8qwFZ2wgfo0GU`
    axios.get(url)
        .then(response => {
          console.log('response: ', response);
        })
        .catch(error => console.log(error));
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Compare Rides
      </Button>    
    );  
  }

  render() {
    const { currentLocation, destination } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="From"
            autoCorrect={false}
            onChangeText={this.onCurrentLocationChange.bind(this)}
            value={currentLocation.address}
          />  
        </CardSection>

        <CardSection>
          <Input
            placeholder="To"
            autoCorrect={false}
            onChangeText={this.onDestinationChange.bind(this)}
            value={destination.address}
          />  
        </CardSection>

        <CardSection>
          {this.renderButton()}
        </CardSection> 

      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { currentLocation, pickupLocation, destination } = state.location;

  return { currentLocation, pickupLocation, destination };
};



export default connect(mapStateToProps, {
  getDefaultCurrentLocation,
  updateCurrentLocation,
  updateDestination,
  setDestination,
  fetchRideData 
})(TripAddressForm);
