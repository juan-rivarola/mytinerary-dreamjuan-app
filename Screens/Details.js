import { useEffect, useState } from "react"
import {FlatList, Image, View, Text, StyleSheet } from "react-native"
import citiesApi, { useDetailsQuery } from "../features/citiesApi"

export default function Details({navigation}){
    const id = '630e518bbe28a5faae2423c0'
let {data:city, isLoading, isSuccess}=useDetailsQuery(id)
if (isLoading) {
    city=[]
   } else if (isSuccess) {
    city=city
   }
console.log(city.response)

    return(
            <View style={styles.container}>
                <View style={styles.container.details}>
                    <View style={styles.titlecontainer}>
                        <Text style={styles.title}>{city.response.name} </Text>
                    </View>
                        <Text style={styles.close} onPress={()=> navigation.navigate("Cities")}>X</Text>
                    <Image source={{uri:city.response.image}} style={styles.img}/>
                    <Text style={styles.title}>{city.response.country}</Text>
                    <View style={styles.infocontainer}>
                        <Text style={styles.info}>Fundation Year: {city.response.fundation}</Text>
                        <Text style={styles.info}>Population: {city.response.population}</Text>
                    </View>
                </View>
            </View>
    )
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'black',
        minHeight:1000,
        details:{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 20
        }
    },
    titlecontainer:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent:"space-evenly"
    },
    img:{
        width:450,
        height:255,
        marginTop:30,
        marginBottom:30,
        alignSelf: "center"
    },
    title:{
        fontSize:40,
        color:'white',
        textAlign: "center"
    },
    country:{
        color:'white',
        fontSize:0
    },
    info:{
        color:'white',
        fontSize:30,
        margin:10,
        textAlign: "center"
    },
    infocontainer:{
        flex:0,
        justifyContent:'center',
        alignItems:'center'
    },
    close:{
        color: "white",
        fontSize: 40,
        position:"absolute",
        right: 10
    }
})