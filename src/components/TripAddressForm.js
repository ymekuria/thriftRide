import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';

class TripAddressForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="From"
            autoCorrect={false}
            onChangeText={(text)=> console.log(text)}
          />  
        </CardSection>

        <CardSection>
          <Input
            placeholder="To"
            autoCorrect={false}
            onChangeText={(text)=> console.log(text)}
          />  
        </CardSection>

        <CardSection>
          <Button>
            Compare Rides
          </Button>
        </CardSection>  
      </Card>
    );
  }
}

// const mapStateToProps = state => {
  
// }

export default TripAddressForm;
    