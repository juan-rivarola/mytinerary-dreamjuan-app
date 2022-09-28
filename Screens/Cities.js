import { useRef, useState } from "react"
import { Text, View,StyleSheet,ScrollView, Button } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import CityCard from "../components/CityCard"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useAllQuery } from "../features/citiesApi"

export default function Cities(){
    const scrollRef = useRef()
    let [search, setSearch]=useState('')
    let{data:cities, isLoading, isSuccess} = useAllQuery(search)
    if (isLoading) {
        cities=[]
       } else if (isSuccess) {
        cities=cities
       }
    return(
        <View style={styles.container}>
            <Header />
            <ScrollView style={styles.cardContainer} ref={scrollRef}>
            <TextInput 
                 style={styles.input} 
                 placeholder="Search country" 
                 onChangeText={newT=>setSearch(newT)}/> 
                   <CityCard data={cities}/>
                   <Footer />
                   <Button style={styles.goTop} title="Top" onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}/>
                </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor: "black",
        // minHeight:990
        height: "100%",
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