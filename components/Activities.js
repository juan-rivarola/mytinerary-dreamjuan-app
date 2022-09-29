import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useByitineraryQuery } from "../features/activitiesApi";

export default function Activities(props){
    let id
    props.ItineraryId?id=props.ItineraryId:id=props
    let {data:activities} = useByitineraryQuery(id)
    const cardActivity = (item) =>(
        <View style={styles.actContainer} key={item.name}>
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
        with:205,
        height:275
    },
    actTitle:{
        color:'white',
        fontSize:50,
        textAlign:'center',
        alignSelf:'center'
    },
    actName:{
        color:'white',
        fontSize:22
    },
    actContainer:{
        width:300,
        flex:0,
        justifyContent:'center',
        marginBottom:29
    }
})