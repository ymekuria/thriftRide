import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentLocation, updateDestination } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class TripAddressForm extends Component {
  onCurrentLocationChange(text) {
    this.props.updateCurrentLocation(text);
  }

  onDestinationChange(text) {
    this.props.updateDestination(text);
  } 

  onButtonPress() {
    console.log('finding ride matches');
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
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
          <Button onPress={this.onButtonPress.bind(this)}>
            Compare Rides
          </Button>
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
  updateDestination 
})(TripAddressForm);
