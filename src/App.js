import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from './components/common'

class App extends Component {
  state = {
    pressed: ''
  }
  onButtonPress() {
    
  }

  render() {
    return (
      <View>
        <Button onPress={this.onButtonPress.bind(this)}>
          Hi World
        </Button>
      </View>  
    )
  }
}

export default App;