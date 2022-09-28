import { View, Text,StyleSheet, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useCreateCityMutation } from '../features/citiesApi'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function NewCity() {
    const scrollRef = useRef()
    const [city,setCity] =useState('')
    const [country,setCountry] =useState('')
    const [image,setImage] =useState('')
    const [population,setPopulation] =useState('')
    const [fundation,setFundation] =useState('')

    const [newCity] = useCreateCityMutation()

    const create = ()=>{
        let cityCreate ={
            city:city,
            country:country,
            image:image,
            population:population,
            fundation:fundation
        }
        newCity(cityCreate)
    }

  return (
    <View style={styles.container}>
        <ScrollView ref={scrollRef}>
        <View style={styles.newCity}>
            <Header />
            <Text style={styles.title}>New City</Text>
                <TextInput  placeholder="City" style={styles.input} onChangeText={newT=>setCity(newT)}/>
                <TextInput  placeholder="Country" style={styles.input} onChangeText={newT=>setCountry(newT)}/>
                <TextInput  placeholder="Image" style={styles.input} onChangeText={newT=>setImage(newT)}/>
                <TextInput  placeholder="Population" style={styles.input} onChangeText={newT=>setPopulation(newT)}/>
                <TextInput  placeholder="Fundation" style={styles.input} onChangeText={newT=>setFundation(newT)}/>
            <Button title='Add city' onPress={create}></Button>
            <Footer />
        </View>
        <Button style={styles.goTop} title="Top" onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}/>
        </ScrollView>
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