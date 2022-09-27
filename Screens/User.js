import { View, Text,StyleSheet, Button,Alert } from 'react-native'
import React, { useRef } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function User() {
  const AccionS = (e) =>{
    e.preventDefault()
    axios.post (`https://my-tinerary-dreamjuan-back.herokuapp.com/auth/signin`,{  
      mail : mailS.current.value,
      password : passS.current.value,})
      .then(function(response){
        console.log(response)
        localStorage.setItem('user',JSON.stringify(response.data.response.user))
        // localStorage.setItem('token',JSON.stringify(response.data.response.token))
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.signin}>Sign In</Text>
      <TextInput
        placeholder='hola@gmail.com'
        style={styles.input}
        // ref="asd"
      />
      <TextInput
        placeholder='password'
        style={styles.input}
        secureTextEntry={true}
      />
      <Button title='Login' onPress={AccionS}></Button>
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