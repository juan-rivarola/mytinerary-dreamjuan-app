import { View, Text,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ButtonLetsGo({navigation}) {
  return (
    <View >
      <Button
        title="LET'S GO"
        onPress={() => navigation.navigate('Cities')}
      />
    </View>
  )
}