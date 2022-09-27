import React, { useState } from "react"
import { FlatList, View,Text,Image,StyleSheet } from "react-native"
import { useAllQuery } from "../features/citiesApi"

function Carousel (){
    const search = ''
   let {data:cities} = useAllQuery(search)

    return ( 
            <FlatList 
                horizontal={true}
                data={cities.response}
                renderItem={({item}) =>( 
                    <View>

                        <Image source={{uri:item.image}} style={styles.img}/>
                        <Text style={styles.country}>{item.country}</Text>
                    </View>  
            )} />
    )   
}

const styles = StyleSheet.create({
    img:{
        width: 205,
        height: 205
    },
    country:{
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "rgb(163, 163, 163)"
    }
})

export default Carousel