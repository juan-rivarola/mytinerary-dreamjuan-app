import { View, Text,StyleSheet, Button,Alert } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSigninMutation, useSignoutMutation } from '../features/usersApi'
import  Header  from '../components/Header'


export default function User() {
  const [mail,setMail] = useState("")
  const [password, setPassword] = useState("")
  const [logged, setLogged] = useState(false)
  const [user,setUser] = useState()

  const [useSignIn] = useSigninMutation()
  const [useSignOUT] = useSignoutMutation()

  // const signIN = () =>{
  //   let data = {
  //   mail : mail,
  //   password : password
  // }
  // useSignIn(data)
  // AsyncStorage.setItem('user',JSON.stringify(data)).then(value => setNameUser(value) )
  // setLogged(!logged)
  // console.log(useSignIn(data))
  // console.log(logged)
  // }

  const signOUT = ()=>{
    useSignOUT(userID.id)
    setLogged(!logged)
    Alert.alert(`Logged out successfully`)
  }


  const setData = async (value)=>{
    try{
      await  AsyncStorage.setItem('user',JSON.stringify(value))
    }catch(error){
      console.log(error)
    }
  }
  const getData = async ()=>{
    try{
      await AsyncStorage.getItem('user').then(value =>setUser(value))
    }catch(error){
      console.log(error)
    }
  }
  const handleSubmit = async ()=>{
    let user = {
      mail : mail,
      password : password
    }

    let {data,error} = await useSignIn(user)
    if(error){
      Alert.alert(
        "try again"
      )
    }else{
      setData(data.response.user)
      await getData()
      Alert.alert(`Welcome ${data.response.user.name}`)
    }
    setLogged(!logged)
  }
  const [userID,setUserID] = useState("")
AsyncStorage.getItem("user").then(user =>setUserID(JSON.parse(user)))

  return (
    <View style={styles.container}>
      <Header />
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
      {logged ? <>
                  <Button title='Sign in' onPress={handleSubmit}></Button>
                  <Text style={styles.disconnected}>Disconnected</Text>
                </>
                 :<>
                    <Button title='Sign out' onPress={signOUT}></Button>
                    <Text style={styles.connected}>Connected</Text>
                 </>
                 }
                 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "black", 
    height: "100%",
    alignItems: "center",
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
  },
  disconnected:{
    color: "red",
    fontWeight: "bold"
  },
  connected:{
    color: "green",
    fontWeight: "bold"
  }
})