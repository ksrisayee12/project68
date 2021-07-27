import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import FB from './Screens/FB';
import IN from './Screens/IN';

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  FB: {screen: FB},
  INSTA: {screen: IN},
});

const AppContainer = createAppContainer(TabNavigator);