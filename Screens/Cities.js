import { useState } from "react"
import { Text, View,StyleSheet,ScrollView } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import CityCard from "../components/CityCard"
import { useAllQuery } from "../features/citiesApi"

export default function Cities(){
    let [search, setSearch]=useState('')
    let{data:cities, isLoading, isSuccess} = useAllQuery(search)
    if (isLoading) {
        cities=[]
       } else if (isSuccess) {
        cities=cities
       }
    return(
        <View style={styles.container}>
            <ScrollView style={styles.cardContainer}>
            <TextInput 
                 style={styles.input} 
                 placeholder="Search country" 
                 onChangeText={newT=>setSearch(newT)}/> 
                   <CityCard data={cities}/>
                </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor: "black",
        minHeight:990
    },
    input:{
        padding: 10,
        margin:20,
        width: 350,
        backgroundColor: "white",
        borderRadius: 15,
        alignSelf: "center"
    },
    cardContainer:{
        flex:0
    }
})