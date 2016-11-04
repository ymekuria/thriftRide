import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import HomeView from './components/HomeView';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText="Hello World" />
          <HomeView />
        </View>  
      </Provider>  
    );
  }
}

export default App;