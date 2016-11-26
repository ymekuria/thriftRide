import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import axios from 'axios';
import { googleMapsKey } from '../config';
import { 
  setDefaultCurrentLocation,
  updateCurrentLocation, 
  updateDestination, 
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
    navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        
      },
      (error) => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );     
  }

  onCurrentLocationChange(text) {
    this.props.updateCurrentLocation(text);
  }

  onDestinationChange(text) {
    this.props.updateDestination(text);
  } 

  onButtonPress() {
    // // this.props.fetchRideData();
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
    console.log('this.props: ', this.props);
    const { currentLocation, destination } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            placeholder="From"
            autoCorrect={false}
            onChangeText={this.onCurrentLocationChange.bind(this)}
            value={currentLocation}
          />  
        </CardSection>

        <CardSection>
          <Input
            placeholder="To"
            autoCorrect={false}
            onChangeText={this.onDestinationChange.bind(this)}
            value={destination}
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
  const { currentLocation, destination } = state.location;

  return { currentLocation, destination };
};



export default connect(mapStateToProps, { 
  updateCurrentLocation, 
  updateDestination,
  fetchRideData 
})(TripAddressForm);
