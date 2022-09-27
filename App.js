import 'react-native-gesture-handler'
import Cities from './Screens/Cities';
import Welcome from './Screens/Welcome';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  )
}

