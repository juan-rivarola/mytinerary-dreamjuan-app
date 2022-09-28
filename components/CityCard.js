import React from "react";
import { View, StyleSheet, Image,Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
export default function(props){
    const allCard = props.data.response ? props.data.response : props.data
    const card =(item) =>(
        <View style={styles.cards} key={item._id}>
        <Image source={{uri:item.image}} style={styles.img}/>
                        <Text style={styles.country}>{item.name}</Text>
     </View>
        )
    return(
      <>
      {allCard?.map(card)}
      </>
    )
}

const styles = StyleSheet.create({
    img:{
        width: 350,
        height: 205
    },
    country:{
        textAlign: "center",
        fontWeight: "bold",
        backgroundColor: "rgb(163, 163, 163)",
        width: 350,
    },
    cards:{
        alignSelf:'center',
        margin:10,
    }
})