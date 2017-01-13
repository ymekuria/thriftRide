import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

let { height, width } = Dimensions.get('window');

class TripMap extends Component {
  

  onRegionChange(region) {
    // set region state via redux
  }

  onRegionChangeComplete(region) {
    // set state of final region upon completion
  }

  render () {
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
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

export default TripMap;