import React, { useState } from "react"
import { FlatList, View,Text,Image,StyleSheet } from "react-native"
import { useAllQuery } from "../features/citiesApi"

function Carousel (){
    const search = ''

   let {data:cities, isLoading, isSuccess} = useAllQuery(search)
   if (isLoading) {
    cities=[]
   } else if (isSuccess) {
    cities=cities
   }
    return ( 
            <FlatList 
                horizontal={true}
                data={cities.response}
                renderItem={({item}) =>( 
                    <View style={styles.container}>
                        <Image source={{uri:item.image}} style={styles.img}/>
                        <Text style={styles.country}>{item.country}</Text>
                    </View>  
            )} />
    )   
}

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
    },
    img:{
        width: 205,
        height: 205
    },
    country:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize:20,
        backgroundColor: "rgb(163, 163, 163)"
    }
})

export default Carousel