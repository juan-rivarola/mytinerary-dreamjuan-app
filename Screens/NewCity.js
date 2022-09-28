import { View, Text,StyleSheet, Button, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useCreateCityMutation } from '../features/citiesApi'

export default function NewCity() {

    const [city,setCity] =useState('')
    const [country,setCountry] =useState('')
    const [image,setImage] =useState('')
    const [population,setPopulation] =useState('')
    const [fundation,setFundation] =useState('')

    const [newCity, {data:cityCreated, isSuccess, error}] = useCreateCityMutation()

    const create = ()=>{
        let cityCreate ={
            city:city,
            country:country,
            image:image,
            population:population,
            fundation:fundation
        }
        console.log(cityCreate)
        newCity(cityCreate)
        if (cityCreated?.isSuccess) {
            console.log('success')
            Alert.alert('City created succesfully')
        } else {
            console.log(error)
            Alert.alert("Couldn´t create city")
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.newCity}>
            <Text style={styles.title}>New City</Text>

                <TextInput  placeholder="City" style={styles.input} onChangeText={newT=>setCity(newT)}/>
                <TextInput  placeholder="Country" style={styles.input} onChangeText={newT=>setCountry(newT)}/>
                <TextInput  placeholder="Image" style={styles.input} onChangeText={newT=>setImage(newT)}/>
                <TextInput  placeholder="Population" style={styles.input} onChangeText={newT=>setPopulation(newT)}/>
                <TextInput  placeholder="Fundation" style={styles.input} onChangeText={newT=>setFundation(newT)}/>

            <Button title='Add city' onPress={create}></Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        height: "100%",
        // paddingTop: 100
    },
    input:{
        backgroundColor: "white",
        width: 300,
        margin: 10,
        borderRadius: 10,
        paddingStart: 15,
        padding:10,
        borderColor: "black",
        borderWidth: 1
    },
    newCity:{
        alignItems: "center",
        backgroundColor: "gray"
    },
    title:{
        color:"#f45900",
        fontSize: 50
    }
})