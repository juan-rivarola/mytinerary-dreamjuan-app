import { useNavigation } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import {FlatList, Image, View, Text, StyleSheet, Button } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Footer from "../components/Footer"
import Itinerary from "../components/Itinerary"
import citiesApi, { useDetailsQuery } from "../features/citiesApi"
import { useBycityQuery } from "../features/itinerariesApi"

export default function Details(props){
    let id
    props.route.params.id? id=props.route.params.id: id=props
    let navigation= useNavigation()
let {data:city, isLoading, isSuccess}=useDetailsQuery(id)
if (isLoading) {
    city=[]
   } else if (isSuccess) {
    city=city.response
   }

    let {data:itineraries} = useBycityQuery(id)
   const scrollRef = useRef()
    return(
    <ScrollView  ref={scrollRef}>
                    <View style={styles.container}>
                        <View style={styles.container.details}>
                            <View style={styles.titlecontainer}>
                                <Text style={styles.title}>{city.name} </Text>
                            </View>
                            <Text style={styles.close} onPress={()=> navigation.navigate("Cities")}>X</Text>
                            <Image source={{uri:city.image}} style={styles.img}/>
                            <Text style={styles.title}>{city.country}</Text>
                            <View style={styles.infocontainer}>
                                <Text style={styles.info}>Fundation Year: {city.fundation}</Text>
                                <Text style={styles.info}>Population: {city.population}</Text>
                            </View>
                            <Itinerary id={id}/>
                        </View>
                    </View>
                    <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
                    </ScrollView>
    )
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:"100%",
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
    },
    goTop:{
        color: "white",
        fontSize: 25,
        paddingVertical:20,
        backgroundColor:"#32D",
        width: "100%",
        textAlign: "center",
        fontWeight: "bold"
      },
})