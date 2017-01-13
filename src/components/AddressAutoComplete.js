import React, { Component } from 'react';

var {GooglePlacesAutocomplete} = require('react-native-google-places-autocomplete');
 
const homePlace = {description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = {description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};
 
class AddressAutoComplete extends Component {
  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={2} // minimum length of text to search 
        autoFocus={false}
        listViewDisplayed='auto'    // true/false/undefined 
        fetchDetails={true}
        renderDescription={(row) => {
          console.log('row: ', row);
          return row.description
        }} // display street only 
        onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true 
          console.log(data);
          console.log(details);
        }}
        getDefaultValue={() => {
          return ''; // text input default value 
        }}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete 
          key: 'AIzaSyDzI4k6kk_v85GadzQitdqRa6pDJYFt3Ok',
          language: 'en', // language of the results 
          // types: '(cities)', // default: 'geocode' 
        }}
        styles={{
          description: {
            fontWeight: 'bold',
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
 
        currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list 
        currentLocationLabel="Current location"
        nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch 
        GoogleReverseGeocodingQuery={{
          // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro 
        }}
        GooglePlacesSearchQuery={{
          // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search 
          rankby: 'distance',
          types: 'food',
        }}
 
 
        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities 
 
        predefinedPlaces={[homePlace, workPlace]}
      />
    );
  }
}

export default AddressAutoComplete;