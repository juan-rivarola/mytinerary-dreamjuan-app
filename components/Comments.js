import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useAllQuery } from '../features/commentsApi'

export default function Comments() {
    const idItinerary = "6316673e981c8cdc211716be"
    let {data:comments} = useAllQuery(idItinerary)
    const arrayComments = comments.response
    console.log(arrayComments)
  return (
    <View style={styles.container}>
            {arrayComments.map(comment => (
                <View style={styles.containerComment}>
                    <View style={styles.description}>
                        <Image style={styles.img} source={{uri:comment.user.photo}} />
                        <Text style={styles.name}>{comment.user.name}</Text>
                    </View>
                <Text style={styles.comment}>{comment.comment}</Text>
                </View>
            ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#111", 
        height: "100%",
    },
    name:{
        color:"white",
        fontSize:20,
        fontWeight: "bold"
    },
    comment:{
        color:"white",
        marginTop:10,
        padding:5,
        fontSize:15,
        marginBottom: 10
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginHorizontal: 20
    },
    description:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:20
    },
    containerComment:{
        // marginTop:40,
        borderWidth: 1,
        borderColor: "grey"
    }
})