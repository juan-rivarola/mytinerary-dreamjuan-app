import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Activities from "../components/Activities";
import Comments from "../components/Comments";
import { useByuserQuery } from "../features/itinerariesApi"; 

export default function MyTineraries(){
    const [id, setId] = useState('')
    const thisId = async ()=>{
        try{
      await AsyncStorage.getItem('user')?(value =>setId(JSON.parse)):setId('')
        }catch(e){console.log(e)}
    }
    thisId()
    console.log(id)
    let {data:itineraries} = useByuserQuery(id)
    const itineraryCard = (item)=>(
        <View style={styles.itineraryBox} key={item._id}>
        <Text style={styles.description.name}>{item.name}</Text>
        <Text style={styles.description}>Price: {item.price}</Text>
        <Text style={styles.description}>Duration: {item.duration}</Text>
        <Text style={styles.description}> {item.tags}</Text>
        <Text style={styles.description}>Likes: {item.likes.length}</Text>
        <Activities ItineraryId={item._id}/>
        <Comments itinerary={item._id} />
    </View>
    )
    return(
        <ScrollView>
        <View style={styles.container}>
         {itineraries?.map(itineraryCard)}
        </View>
        <Text style={styles.goTop} onPress={()=> scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })}>Top</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "black", 
        height: "100%",
        itinerary:{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 20
        }
    },
    description:{
        color:"white",
        fontSize:20,
        flexWrap: "wrap",
        name:{
            color: "white",
            fontSize: 40,
            fontWeight: "bold"
        }
    },
    priceDuration:{
        flexDirection: "row",
    },
    itineraryBox:{
        alignItems: "center",
        marginVertical: 20
    },
    goTop:{
        color: "white",
        fontSize: 25,
        paddingVertical:20,
        backgroundColor:"#32D",
        width: "100%",
        textAlign: "center",
        fontWeight: "bold"
      }
    
})