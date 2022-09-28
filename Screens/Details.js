import { useEffect, useState } from "react"
import {FlatList, Image, View, Text, StyleSheet } from "react-native"
import citiesApi, { useDetailsQuery } from "../features/citiesApi"

export default function Details(props){
    const id = '630e518bbe28a5faae2423c0'
    useEffect
let {data:city, isLoading, isSuccess}=useDetailsQuery(id)
if (isLoading) {
    city=[]
   } else if (isSuccess) {
    city=city
   }
console.log(city.response)

    return(
            <View style={styles.container}>
            <View style={styles.titlecontainer}>
            <Text style={styles.title}>{city.response.name} </Text>
            <Text style={styles.title}>({city.response.country})</Text>
            </View>
            <Image source={{uri:city.response.image}} style={styles.img}/>
            <View style={styles.infocontainer}>
                <Text style={styles.info}>Fundation Year: {city.response.fundation}</Text>
                <Text style={styles.info}>Population: {city.response.population}</Text>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
      backgroundColor:'black',
      minHeight:1000
    },
    titlecontainer:{
        flex:0,
        flexDirection:'row'
    },
    img:{
        with:300,
        height:255,
        marginTop:30,
        marginBottom:30
    },
    title:{
        fontSize:40,
        color:'white'
    },
    country:{
        color:'white',
        fontSize:0
    },
    info:{
        color:'white',
        fontSize:30,
        margin:10
    },
    infocontainer:{
        flex:0,
        justifyContent:'center',
        alignItems:'center'
    }
})