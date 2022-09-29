import { View, Text,StyleSheet,ScrollView, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import { useBycityQuery, useByuserQuery } from '../features/itinerariesApi'
import Footer from './Footer'
import Activities from './Activities'

export default function Itinerary(props) {
    let idCity = "630e518bbe28a5faae2423c0"
    let id = props.data

    let {data:itineraries} = useBycityQuery(idCity)
    itineraries= itineraries
 //console.log(itineraries)
  return (
                    <View style={styles.container}>
                        <View style={styles.container.itinerary}>
                            {itineraries.map(itinerary =>(
                                <View style={styles.itineraryBox} key={itinerary.name}>
                                    <Text style={styles.description.name}>{itinerary.name}</Text>
                                    <Text style={styles.description}>Price: {itinerary.price}</Text>
                                    <Text style={styles.description}>Duration: {itinerary.duration}</Text>
                                    <Text style={styles.description}> {itinerary.tags}</Text>
                                    <Text style={styles.description}>Likes: {itinerary.likes.length}</Text>
                                    <Activities ItineraryId={itinerary._id}/>
                                </View>
                            ))}
                        </View>
                    </View>
                    
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
    }
    
})