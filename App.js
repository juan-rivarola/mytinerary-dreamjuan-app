import 'react-native-gesture-handler'
import Cities from './Screens/Cities';
import Welcome from './Screens/Welcome';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './navigation/Drawer';
import { Provider } from "react-redux";
import { store } from './features/store';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Drawer />
      </Provider>
    </NavigationContainer>
  )
}

