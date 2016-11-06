import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMidleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import { Header } from './components/common';
import HomeView from './components/HomeView';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMidleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <View>
          <Header headerText="Hello World" />
          <HomeView />
        </View>  
      </Provider>  
    );
  }
}

export default App;