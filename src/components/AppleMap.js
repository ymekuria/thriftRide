import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

let { height, width } = Dimensions.get('window');

class AppleMap extends Component {
  this.onRegionChange.bind(this);
  
  onRegionChange(region) {
    // set region state via redux
  }
  render () {
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        showsCompass
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.07,
          longitudeDelta: 0.02,
        }}
      >
      <MapView.Marker
        coordinate={{latitude:37.774741, longitude: -122.4549285}}
      /> 
      </MapView>
    );
  }
}

const styles = {
    map: {
      width,
      height
  }
}

export default AppleMap;