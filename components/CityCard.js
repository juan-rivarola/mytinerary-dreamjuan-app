import React from "react";
import { View, StyleSheet, Image,Text, Pressable, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function CityCard(props){
    const godetails= ({navigation}) =>navigation.navigate('Details')
    const allCard = props.data.response ? props.data.response : props.data
    const card =(item) =>(
        <View style={styles.cards} key={item._id}>
            <Pressable onPress={()=>Alert.alert('Detalles de '+item.name)}>
            <Image source={{uri:item.image}} style={styles.img}/>
            <Text style={styles.country}>{item.name}</Text>
            </Pressable>
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