import { View, Text,StyleSheet, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
export default function NewCity() {
    const items = [
        {value: 'City', placeholder: ' Enter a new '},
        {value: 'Country', placeholder: ' Enter a new '},
        {value: 'Image', placeholder: ' Enter a new '},  
        {value: 'Population', placeholder: ' Enter a new '},  
        {value: 'Fundation', placeholder: ' Enter a new '},
    ]
  return (
    <View style={styles.container}>
        <View style={styles.newCity}>
            <Text style={styles.title}>New City</Text>
            {items.map(item =>(
                <TextInput placeholder={item.value} style={styles.input}/>
            ))}
            <Button title='Add city'></Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        height: "100%",
        // paddingTop: 100
    },
    input:{
        backgroundColor: "white",
        width: 300,
        margin: 10,
        borderRadius: 10,
        paddingStart: 15,
        padding:10,
        borderColor: "black",
        borderWidth: 1
    },
    newCity:{
        alignItems: "center",
        backgroundColor: "gray"
    },
    title:{
        color:"#f45900",
        fontSize: 50
    }
})