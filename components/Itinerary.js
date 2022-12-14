import { View, Text,StyleSheet,ScrollView, Button } from 'react-native'
import React, { useRef, useState } from 'react'
import { useBycityQuery, useByuserQuery } from '../features/itinerariesApi'
import Footer from './Footer'
import Activities from './Activities'
import Comments from './Comments'

export default function Itinerary(props) {
    let idCity
    props.id?idCity=props.id:idCity=props
   
    let {data:itineraries} = useBycityQuery(idCity)
    itineraries= itineraries
    const itineraryCard = (item)=>(
        <View style={styles.itineraryBox} key={item.name}>
        <Text style={styles.description.name}>{item.name}</Text>
        <Text style={styles.description}>Price: {item.price}</Text>
        <Text style={styles.description}>Duration: {item.duration}</Text>
        <Text style={styles.description}> {item.tags}</Text>
        <Text style={styles.description}>Likes: {item.likes.length}</Text>
        <Activities ItineraryId={item._id}/>
        <Comments itinerary={item._id} />
    </View>
    )

  return (
                    <View style={styles.container}>
                        <View style={styles.container.itinerary}>
                            {itineraries?.map(itineraryCard)}
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