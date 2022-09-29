import { View, Text,StyleSheet, Button,Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSigninMutation } from '../features/usersApi'


export default function User() {
  const [mail,setMail] = useState("")
  const [password, setPassword] = useState("")

  const [useSignIn] = useSigninMutation()

  const AccionS = async() =>{
    let data = {
      mail : mail,
      password : password
    }
    
    useSignIn(data)

    try{
       await AsyncStorage.setItem('user',JSON.stringify(data))
      let user = AsyncStorage.getItem('user')
      console.log(user)
      
    }catch(error){
      console.log(error)
    }
    



      // .then(function(response){
      //   console.log(response)
      //   AsyncStorage.getItem('user')
      //   .then(value=> setUser(Json.parse(value)))
        // localStorage.setItem('token',JSON.stringify(response.data.response.token))
    // })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.signin}>Sign In</Text>
      <TextInput
        placeholder='hola@gmail.com'
        style={styles.input}
        onChangeText={setMail}
      />
      <TextInput
        placeholder='password'
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}
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