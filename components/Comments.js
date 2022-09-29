import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { useByitineraryQuery } from '../features/commentsApi'


export default function Comments(props) {
    let id 
    props.itinerary?id=props.itinerary:id=props
    let {data:comments} = useByitineraryQuery(id)
    const cardComment = (item)=>(
        <View style={styles.containerComment} key={item._id}>
                    <View style={styles.description}>
                        <Image style={styles.img} source={{uri:item.user.photo}} />
                        <Text style={styles.name}>{item.user.name}</Text>
                    </View>
                <Text style={styles.comment}>{item.comment}</Text>
                </View>
    )
    console.log(comments)
    
  return (
    <View style={styles.container}>
         {comments?.response?.map(cardComment)}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#111", 
        // height: "100%",
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