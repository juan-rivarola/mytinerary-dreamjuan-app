import { View, Text,StyleSheet, Button,Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function User() {
  return (
    <View style={styles.container}>
      <Text style={styles.signin}>Sign In</Text>
      <TextInput
        placeholder='hola@gmail.com'
        style={styles.input}
      />
      <TextInput
        placeholder='password'
        style={styles.input}
        secureTextEntry={true}
      />
      <Button title='Login' onPress={() => Alert.alert('Te la creiste wey :)')}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "black", 
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,

  },
  signin:{
    color:"#f45900",
    fontSize: 50
  },
  input:{
    backgroundColor: "white",
    width: 300,
    margin : 10,
    borderRadius: 10,
    paddingStart: 15,
    padding:10
  }
})