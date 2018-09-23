import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

import Home from './components/Home/Home';
import CameraPane from './components/CameraPane/CameraPane';


const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    CameraPane: { screen: CameraPane },
  },
  {
    initialRoute: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
