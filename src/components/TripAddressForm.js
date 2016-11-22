import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';

class TripAddressForm extends Component {
  render() {
    return (
      <CardSection>
        <Input />
      </CardSection>
    );
  }
}

const mapStateToProps = state => {
  
}

export default connect(null)(TripAddressForm);
