import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMidleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import config from './config';
import Router from './Router';
import reducers from './reducers';
import { Header } from './components/common';
import HomeView from './components/HomeView';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMidleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router /> 
      </Provider>  
    );
  }
}

export default App;