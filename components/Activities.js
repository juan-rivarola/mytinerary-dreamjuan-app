import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useByitineraryQuery } from "../features/activitiesApi";

export default function Activities(props){
    let id
    props.ItineraryId?id=props.ItineraryId:id=props
    let {data:activities} = useByitineraryQuery(id)
    const cardActivity = (item) =>(
        <View className="act-card" key={item.name}>
            <Image source={{uri:item.photo}} style={styles.img} className="act-img" />
            <Text style={styles.actName}>{item.name}</Text>
        </View>
)
    return(
        <View>
            <Text style={styles.actTitle}>Activities</Text>
            <View>
                {activities?.response?.map(cardActivity)}
</View>
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
        with:75,
        height:75
    },
    actTitle:{
        color:'white',
        fontSize:50
    },
    actName:{
        color:'white',
        fontSize:22
    }
})